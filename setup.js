const fs = require('fs')
const path = require('path')

const packageJson = require('./package.json')
const jestConfig = require('./jest.json')

const deleteFile = (fileName) => fs.unlinkSync(path.join(process.cwd(), fileName))
const writeFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data)

console.log('🔄 Setting up...')

packageJson.jest = Object.assign(packageJson.jest, jestConfig)
writeFile('package.json', JSON.stringify(packageJson, null, 2))

deleteFile('App.js')
deleteFile('devDependencies.json')
deleteFile('.flowconfig')
deleteFile('jest.json')
deleteFile('README.md')
deleteFile('LICENSE')
deleteFile('setup.js')

console.log(`✅ Setup completed!`)
