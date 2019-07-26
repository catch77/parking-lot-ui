// refs https://github.com/facebook/react/blob/master/scripts/prettier/index.js

const glob = require('glob');
const prettier = require('prettier');
const fs = require('fs');

const prettierConfigPath = require.resolve('../.prettierrc');

let files = [];

const ignoreFiles = ['**/node_modules/**', '**/build/**', '**/static/**', '**/**.snap', '**/**.map', '**/dist/**'];

// get all ts files
const tsFiles = glob.sync('**/*.ts*', {
  ignore: ignoreFiles,
});
files = files.concat(tsFiles);

// get all js files
const jsFiles = glob.sync('**/*.js*', {
  ignore: ignoreFiles,
});
files = files.concat(jsFiles);

// get all vue files
const vueFiles = glob.sync('**/*.vue*', {
  ignore: ignoreFiles,
});
files = files.concat(vueFiles);

// get all less files
const lessFiles = glob.sync('**/*.less', {
  ignore: ignoreFiles,
});
files = files.concat(lessFiles);

// get all scss files
const scssFiles = glob.sync('**/*.scss', {
  ignore: ignoreFiles,
});
files = files.concat(scssFiles);

if (!files.length) {
  return;
}

let didError = false;
let didWarn = false;

files.forEach(file => {
  const options = prettier.resolveConfig.sync(file, {
    config: prettierConfigPath,
  });
  try {
    const fileInfo = prettier.getFileInfo.sync(file);
    if (fileInfo.ignored) {
      return;
    }
    const input = fs.readFileSync(file, 'utf8');
    const withParserOptions = {
      ...options,
      parser: fileInfo.inferredParser,
    };
    const isPrettier = prettier.check(input, withParserOptions);
    if (!isPrettier) {
      // eslint-disable-next-line no-console
      console.log(`\x1b[31m ${file} is no prettier, please use npm run prettier and git add !`);
      didWarn = true;
    }
  } catch (e) {
    didError = true;
  }
});

if (didWarn || didError) {
  process.exit(1);
}
// eslint-disable-next-line no-console
console.log('\x1b[32m lint prettier success!');
