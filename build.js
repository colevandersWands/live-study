const fs = require("fs");
const path = require("path");

const DIR = './exercises'
  + (process.argv[2]
    ? process.argv[2]
    : '');

const register = function (dirPath) {
  const dirs = [];
  const files = [];

  const paths = fs.readdirSync(dirPath);
  for (let nextPath of paths) {

    const isDirectory = fs.statSync(dirPath + '/' + nextPath).isDirectory();
    if (!isDirectory && path.extname(nextPath) !== '.js') continue;

    if (isDirectory) {
      const subDir = register(dirPath + '/' + nextPath);
      if (subDir) {
        dirs.push(subDir);
      };
    } else {
      files.push('/' + nextPath);
    }
  };

  const noExercises = files.length === 0 && dirs.length === 0;
  if (noExercises) {
    return null;
  };

  const virDir = {
    path: '/' + dirPath.split('/').pop(),
  };
  if (files.length > 0) virDir.files = files;
  if (dirs.length > 0) virDir.dirs = dirs;

  return virDir;
};


console.log('\n--- registering .js files in ' + DIR + ' ---\n');
const registered = register(DIR);
registered.lastBuild = (new Date()).toJSON();

console.log('\n--- writing ' + DIR + '/index.json ---\n');
const stringifiedReg = JSON.stringify(registered, null, '  ');
fs.writeFileSync(DIR + '/index.json', stringifiedReg);
