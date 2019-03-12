const fs = require('fs')
const path = require('path')

if (fs.existsSync(path.join(__dirname, '.travis.yml'))) {
  process.exit()
}

const projectFilesToDelete = ['.flowconfig', 'App.js', '__tests__/App-test.js']

const templateFilesToDelete = ['setup.js', 'README.md', 'LICENSE']

const projectPath = path.join(__dirname, '..', '..')

const deleteIfExists = filePath => {
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
}

const deleteProjectFile = fileName => deleteIfExists(path.join(projectPath, fileName))
const deleteTemplateFile = fileName => deleteIfExists(path.join(__dirname, fileName))

projectFilesToDelete.forEach(deleteProjectFile)
templateFilesToDelete.forEach(deleteTemplateFile)
