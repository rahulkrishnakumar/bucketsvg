const path = require('path');

const ICON_SUFFIX = {
  Circle: 'Circle',
  Color: 'Color',
  Duo: 'Duo',
  Outline: 'Outline',
  Solid: 'Solid',
  Square: 'Square',
  Thin: 'Thin',
};

function template(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const filePathSplited = filePath.split(path.sep);
    const foldersName = filePathSplited[filePathSplited.length - 2];
    const suffix = ICON_SUFFIX[foldersName];
    const basename = path.basename(filePath, path.extname(filePath));

    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;

    return `export { default as ${exportName + suffix} } from './${basename}'`;
  });
  return exportEntries.join('\n');
}

module.exports = template;
