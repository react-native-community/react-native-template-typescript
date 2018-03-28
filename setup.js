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
const currPackager = isYarnAvailable ? "yarn" : "npm";
const logInstallingWith = pkg => console.log(`\n📦 Installing dependencies with ${pkg}...\n`);
const execOptions = {
  stdio: 'inherit'
}

console.log('\n🔄 Please wait...\n');

packageJson.scripts.start = `${packageJson.scripts.start} --config ../../../../rn-cli.config.js`;
packageJson.jest = Object.assign(packageJson.jest, jestJson);
writeFile('package.json', JSON.stringify(packageJson, null, 2));

logInstallingWith(currPackager);

if (isYarnAvailable) {
  execSync(`yarn add ${devDependencies.join(' ')} --dev --exact`, execOptions);
} else {
  execSync(`npm i ${devDependencies.join(' ')} --save-dev --save-exact`, execOptions);
}

deleteFile('App.js');
deleteFile('__tests__/App.js');
deleteFile('.flowconfig');
deleteFile('devDependencies.json');
deleteFile('jest.json');
deleteFile('README.md');
deleteFile('LICENSE');
deleteFile('setup.js');

console.log(`\n✅ Setup completed! You can now start with: ${currPackager} start\n`);
