const fs = require('fs')
const path = require('path')
const {execSync} = require('child_process')

const packageJson = require('./package.json')
const jestConfig = require('./jest.json')
const devDependencies = require('./devDependencies.json')

const deleteFile = (fileName) => {
  const filePath = path.join(process.cwd(), fileName)

  if (!fs.existsSync(filePath)) {
    return
  }

  fs.unlinkSync(filePath)
}
const writeFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data)
const isYarnAvailable = () => {
  try {
    execSync('yarn --version', {stdio: 'ignore'})
    return true
  } catch (exc) {
    return false
  }
}

const packageManager = isYarnAvailable() ? 'yarn' : 'npm'
const execOptions = {stdio: 'inherit'}

console.log('🔄 Please wait...\n')

packageJson.scripts.start = `${packageJson.scripts.start} --config ../../../../rn-cli.config.js`
packageJson.jest = Object.assign(packageJson.jest, jestConfig)
writeFile('package.json', JSON.stringify(packageJson, null, 2))

console.log(`📦 Installing dependencies with ${packageManager}...\n`)

switch (packageManager) {
  case 'yarn':
    execSync(`yarn add ${devDependencies.join(' ')} --dev --exact`, execOptions)
    break
  default:
    execSync(`npm i ${devDependencies.join(' ')} --save-dev --save-exact`, execOptions)
}

deleteFile('App.js')
deleteFile('__tests__/App.js')
deleteFile('.flowconfig')
deleteFile('devDependencies.json')
deleteFile('jest.json')
deleteFile('README.md')
deleteFile('LICENSE')
deleteFile('setup.js')

console.log(`\n✅ Setup completed! You can now start with: ${packageManager} start\n`)
