const fs = require('fs')
const path = require('path')

const packageJson = require('./package.json')
const jestConfig = require('./jest.json')

const deleteFile = (fileName) => {
  const filePath = path.join(process.cwd(), fileName)

  if (!fs.existsSync(filePath)) {
    return
  }

  fs.unlinkSync(filePath)
}
const writeFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data)

console.log('🔄 Setting up...')

packageJson.jest = Object.assign(packageJson.jest, jestConfig)
writeFile('package.json', JSON.stringify(packageJson, null, 2))

deleteFile('App.js')
deleteFile('__tests__/App.js')
deleteFile('.flowconfig')
deleteFile('devDependencies.json')
deleteFile('jest.json')
deleteFile('README.md')
deleteFile('LICENSE')
deleteFile('setup.js')

console.log(`✅ Setup completed!`)
