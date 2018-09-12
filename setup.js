const fs = require('fs')
const path = require('path')

const packageJson = require('./package.json')

const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName))
const writeFile = (fileName, data) => fs.writeFileSync(path.join(__dirname, fileName), data)

console.log('🔄 Setting up...')

packageJson.scripts.tsc = 'tsc'

writeFile('package.json', JSON.stringify(packageJson, null, 2))

deleteFile('.flowconfig')
deleteFile('App.js')
deleteFile('LICENSE')
deleteFile('README.md')
deleteFile('setup.js')

console.log(`✅ Setup completed!`)
