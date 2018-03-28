const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJson = require('./package.json');
const jestJson = require('./jest.json');
const devDependencies = require('./devDependencies.json');

const deleteFile = (fileName) => fs.unlinkSync(path.join(process.cwd(), fileName));
const writeFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data);
const isYarnAvailable = () => {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

console.log('🔄 Please wait...');

packageJson.scripts.start = `${packageJson.scripts.start} --config ../../../../rn-cli.config.js`;
packageJson.jest = Object.assign(packageJson.jest, jestJson);
writeFile('package.json', JSON.stringify(packageJson, null, 2));

if (isYarnAvailable) {
  execSync(`yarn add ${devDependencies.join(' ')} --dev --exact`);
} else {
  execSync(`npm i ${devDependencies.join(' ')} --save-dev --save-exact`);
}

deleteFile('App.js');
deleteFile('__tests__/App.js');
deleteFile('.flowconfig');
deleteFile('devDependencies.json');
deleteFile('jest.json');
deleteFile('README.md');
deleteFile('LICENSE');
deleteFile('setup.js');

console.log(`✅ Setup completed! You can now start with: ${isYarnAvailable ? "yarn" : "npm"} start`);
