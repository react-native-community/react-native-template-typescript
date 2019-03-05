const fs = require('fs')
const path = require('path')

const projectFilesToDelete = ['.flowconfig', 'App.js', '__tests__/App-test.js']

const templateFilesToDelete = ['setup.js', 'README.md', 'LICENSE']

const projectPath = path.join(__dirname, '..', '..')
const deleteProjectFile = fileName => fs.unlinkSync(path.join(projectPath, fileName))
const deleteTemplateFile = fileName => fs.unlinkSync(path.join(__dirname, fileName))

projectFilesToDelete.forEach(deleteProjectFile)
templateFilesToDelete.forEach(deleteTemplateFile)
