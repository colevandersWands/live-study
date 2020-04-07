const fs = require("fs");

const REPO_NAME = 'event-loop';
const DIR = './exercises'
  + (process.argv[2]
    ? process.argv[2]
    : '');


console.log('\n--- loading ' + DIR + '/index.json ---\n');

// INDEX will be modified by reference
const INDEX = require(DIR + '/index.json');

console.log('\n--- generating empty reports ---\n');

// by side effect
const addReports = (virDir) => {
  virDir.report = { status: -1 };

  if (virDir.dirs) {
    virDir.dirs.forEach(dir => {
      addReports(dir);
    });
  };

  if (virDir.files) {
    // virDir.report.files = {};
    virDir.report.files = [];
    virDir.files.forEach(file => {
      // virDir.report.files[file] = { log: [], evaluated: false };
      virDir.report.files.push({
        status: -1,
        path: file,
        logs: [],
        evaluated: false
      });
    });
  };

  return virDir;
};

addReports(INDEX);
// console.log(JSON.stringify(INDEX, null, '  '));

console.log('\n--- generating report map ---\n');

const generateReportMap = (virDir) => {
  const relativeDirMap = {};

  if (virDir.dirs) {
    virDir.dirs.forEach(subDir => {
      Object.assign(relativeDirMap, generateReportMap(subDir));
    });
  };

  if (virDir.files) {
    // Object.assign(relativeDirMap, virDir.report.files);
    virDir.report.files.forEach(fileReport => {
      relativeDirMap[fileReport.path] = fileReport;
    });
  };

  const absoluteDirMap = {};

  Object.keys(relativeDirMap).forEach(key => {
    const newKey = virDir.path + key;
    const mappedReport = relativeDirMap[key];
    absoluteDirMap[newKey] = mappedReport;
  });

  return absoluteDirMap;
};

const reportMap = generateReportMap(INDEX);
// console.log(JSON.stringify(reportMap, null, '  '));

// // mini test
// reportMap[Object.keys(reportMap)[0]].push('hi');
// console.log(JSON.stringify(reportMap, null, '  '));
// console.log(JSON.stringify(INDEX, null, '  '));



console.log('\n--- evaluating .js files ---\n');
// access reportMap by global scope

INDEX.lastEvaluation = (new Date()).toJSON();

const relPathFromCallStackLine = (callStackLine) => {
  const lineChar = callStackLine.replace(/^[^(]*\(/, "")
    .replace(/\)[^(]*$/, "")
    .split(/\)[^(]*\(/).join('')
  const filePath = lineChar.split(':')[0];
  const relPath = filePath.replace(__dirname, '');
  // console.log(' = = ', relPath)
  return relPath;
};

const findMapKey = (err) => {
  if (err instanceof Error && err.stack.includes('SyntaxError:')) {
    return err.stack.split('\n')[0]
      .replace(__dirname, '')
      .split(':')[0];
  };

  const reversedStack = err.stack.split('\n').slice(1).reverse();

  const mapKey = reversedStack
    .map(line => relPathFromCallStackLine(line))
    .map(path => path.split(':')[0])
    .find(possibleKey => reportMap[possibleKey]);

  return mapKey;
};

const nativeConsoleAssert = console.assert;
console.assert = function () {
  const args = Array.from(arguments);
  // nativeConsoleAssert(...args);

  const pseudoErr = {};
  Error.captureStackTrace(pseudoErr);
  const mapKey = findMapKey(pseudoErr);
  // crude, good enough
  const async = pseudoErr.stack.includes('at Timeout.');
  const assertionReport = {
    async,
    status: args[0] ? 1 : 2,
    assertion: args[0],
    messages: args.slice(1)
  };
  reportMap[mapKey].logs.push(assertionReport);
};

const nativeConsoleError = console.error;
console.error = function () {
  // what to do about this? not so important till promises
  const args = Array.from(arguments);
  // nativeConsoleError(...args);

  const pseudoErr = {};
  Error.captureStackTrace(pseudoErr);
  const mapKey = findMapKey(pseudoErr);
  const errorReport = {
    args
  };
  reportMap[mapKey].logs.push(errorReport);
};

const reportThrown = (thrown, async) => {
  // console.log(thrown);

  const thrownReport = { async };
  if (thrown instanceof Error) {
    if (thrown.stack.includes('SyntaxError:')) {
      thrownReport.status = 5;
    } else {
      thrownReport.status = 4;
    };

    thrownReport.error = thrown.name + ': ' + thrown.message;
    thrownReport.stack = thrown.stack.replace(__dirname, ' [ ... ] ');
    const mapKey = findMapKey(thrown);
    // console.log('---------', thrownReport.stack)
    reportMap[mapKey].logs.push(thrownReport);
    return;
  };


  thrownReport.status = 3;
  thrownReport.warning = thrown;
  if (typeof thrown.stack === 'string') {
    const pseudoErr = {};
    Error.captureStackTrace(pseudoErr);
    thrownReport.stack = pseudoErr.stack.replace(__dirname, ' [ ... ] ');

    const mapKey = findMapKey(pseudoErr);
    reportMap[mapKey].logs.push(thrownReport);
  } else {
    if (!INDEX.untraceable) INDEX.untraceable = [];
    INDEX.untraceable.push(thrownReport)
  };
};

process.on('uncaughtException', err => {
  reportThrown(err, true);
});

// todo: infinite loop & interval guards
const evaluate = (mapObj) => {
  for (let path in mapObj) {
    try {
      mapObj[path].source = fs.readFileSync(__dirname + path, 'utf-8');
      mapObj[path].evaluated = true;
      require(__dirname + path);
    } catch (err) {
      reportThrown(err, false);
    };
  };
};

evaluate(reportMap);


console.log('\n--- ... waiting for the event loop to clear ---\n');

process.on('exit', (exitCode) => {
  console.log('\n--- interpreting reports ---\n');
  summarizeReports(INDEX);

  // nice for eventually gathering data on students' work
  // console.log('\n--- writing report.json ---\n');
  // fs.writeFileSync(DIR + '/report.json', JSON.stringify(INDEX, null, '  '));

  console.log('\n--- generating REVIEW.md\'s ---\n');

  generateReviews(INDEX);
  writeReviews(INDEX, __dirname);

  console.log(`exiting with code: ${exitCode}`);
});



const summarizeReports = (virDir) => {

  if (virDir.dirs) {
    virDir.dirs.forEach(subDirReport => {
      summarizeReports(subDirReport);
      if (subDirReport.report.status > virDir.report.status) {
        virDir.report.status = subDirReport.report.status
      };
    });
  };

  if (virDir.report.files) {
    virDir.report.files.forEach(fileReport => {
      fileReport.status = fileReport.logs
        .reduce((greatest, next) => next.status > greatest
          ? next.status : greatest, 0);
      if (fileReport.status > virDir.report.status) {
        virDir.report.status = fileReport.status
      };
    });
  };

};

const interpret = (value) =>
  value === -1 ? 'not evaluated'
    : value === 0 ? 'no assertions'
      : value === 1 ? 'pass'
        : value === 2 ? 'fail'
          : value === 3 ? 'warning'
            : value === 4 ? 'error'
              : value === 5 ? 'syntaxError'
                : 'unknown status';


const generateTableOfContents = (virDir, path, indent) => {
  indent = indent || '';
  path = path || '';

  const fileList = virDir.report.files
    ? virDir.report.files
      .map(fileReport => {
        const anchor = fileReport.path
          .split('.').join('')
          .split('/').join('');
        const reviewPath = path
          ? '.' + path + '/REVIEW.md'
          : '';
        return `${indent}* [${fileReport.path}](${reviewPath}#${anchor}) - ${interpret(fileReport.status)}\n`;
      })
      .reduce((list, li) => list + li, '')
    : '';


  const dirList = virDir.dirs
    ? virDir.dirs
      .map(subDir => {
        const subIndex = generateTableOfContents(subDir, path + subDir.path, indent + '  ');
        const reviewPath = path + subDir.path + '/REVIEW.md';
        return `${indent}* [${subDir.path}](.${reviewPath}) - ${interpret(subDir.report.status)}`
          + (subIndex ? '\n' + subIndex : '');
      })
      .reduce((list, li) => list + li, '')
    : '';


  return fileList
    + dirList;
}

const generateFileSectionMd = (fileReport) => {

  const divider = '---';

  const header = `## ${fileReport.path}`;
  const status = `* ${interpret(fileReport.status)}`;
  const sourceLink = `* [review source](.${fileReport.path})`;

  const renderedReport = fileReport.logs
    .map(entry => {
      const isAsync = entry.async
        ? '(async) ' : '';
      if (entry.hasOwnProperty('error')) {
        const isCaught = entry.caught
          ? '(caught) ' : '';
        return `${isAsync}${isCaught}${entry.error}`;
      };
      if (entry.hasOwnProperty('warning')) {
        return `warning ${isAsync}: ` + entry.warning;
      };
      if (entry.hasOwnProperty('assertion')) {
        const assertion = Boolean(entry.assertion)
          ? `+ PASS ${isAsync}: `
          : `- FAIL ${isAsync}: `;
        const message = entry.messages
          .join(', ');
        return assertion + message;
      };
      return '';
    })
    .reduce((all, next) => all + next + '\n', '');

  const report = renderedReport
    ? '```txt\n' + renderedReport + '```\n\n'
    : '';

  const source = fileReport.source
    ? '```js\n' + fileReport.source + '\n```\n\n'
    : '';

  const topLink = '[TOP](#' + REPO_NAME + ')';

  return divider + '\n\n'
    + header + '\n\n'
    + status + '\n'
    + sourceLink + '\n\n'
    + report
    + source
    + topLink + '\n';
};


const generateReviews = (virDir, isNested) => {

  if (virDir.dirs) {
    virDir.dirs
      .forEach(subDir => generateReviews(subDir, true));
  }

  const top = `# ${REPO_NAME} \n\n`
    + `## ${virDir.path}\n\n`
    + `> ${interpret(virDir.report.status)}: ${(new Date(INDEX.lastEvaluation)).toLocaleString()} \n\n`;


  const tableOfContents = generateTableOfContents(virDir);

  const index = (isNested ? '[../REVIEW.md](../REVIEW.md)\n\n' : '')
    + tableOfContents;

  const fileSections = !virDir.report.files
    ? ''
    : virDir.report.files
      .map(fileReport => generateFileSectionMd(fileReport))
      .reduce((body, section) => body + section + '\n', '');

  const newREVIEW = top
    + index + '\n'
    + fileSections;

  virDir.review = newREVIEW;

};


const writeReviews = (virDir, basePath) => {
  fs.writeFileSync(basePath + virDir.path + '/REVIEW.md', virDir.review);
  if (virDir.dirs) {
    virDir.dirs.forEach(subDir => {
      writeReviews(subDir, basePath + virDir.path);
    });
  };
};



