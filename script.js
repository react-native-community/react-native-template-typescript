const fs = require('fs');
const path = require('path');

if (fs.existsSync(path.join(__dirname, '.travis.yml'))) {
  process.exit();
}

const projectFilesToDelete = ['.flowconfig', 'App.js', '__tests__/App-test.js'];

const deleteFile = filePath => {
  if (!fs.existsSync(filePath)) {
    return;
  }

  fs.unlinkSync(filePath);
};

const projectPath = path.join(__dirname, '..', '..');
const deleteProjectFile = fileName => deleteFile(path.join(projectPath, fileName));

projectFilesToDelete.forEach(deleteProjectFile);
