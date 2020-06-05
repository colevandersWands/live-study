const fs = require("fs");
const path = require("path");
const config = require("../config.json");

const EXERCISES_DIR = path.join(__dirname, '..', config.path);
const EXAMPLE_WORDS = ['example', 'examples', 'worked', 'stepped', 'demo'];
const PARENT_DIR = path.join(__dirname, '..');

const removeDirname = dirName => dirName.split(PARENT_DIR).join('  ...  ');

const register = function (dirPath) {
  const dirs = [];
  const files = [];

  const paths = fs.readdirSync(dirPath);
  for (let nextPath of paths) {
    const isExample = EXAMPLE_WORDS
      .reduce((itIs, exampleWord) => {
        return itIs || nextPath.toLowerCase().includes(exampleWord);
      }, false);

    const isDirectory = fs.statSync(dirPath + '/' + nextPath).isDirectory();
    if (!isDirectory && path.extname(nextPath) !== '.js') continue;

    if (isDirectory) {
      const subDir = register(dirPath + '/' + nextPath);
      if (subDir) {
        dirs.push(subDir);
        if (isExample) subDir.isExample = isExample;
      };
    } else {
      const fileData = { path: '/' + nextPath };
      if (isExample) fileData.isExample = isExample;
      files.push(fileData);
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


console.log('\n--- registering .js files in ' + removeDirname(EXERCISES_DIR) + ' ---\n');
const registered = register(EXERCISES_DIR);
registered.lastBuild = (new Date()).toJSON();
// registered.path = config.path;

console.log('\n--- writing ' + removeDirname(EXERCISES_DIR) + '/index.json ---\n');
const stringifiedReg = JSON.stringify(registered, null, '  ');
fs.writeFileSync(EXERCISES_DIR + '/index.json', stringifiedReg);
