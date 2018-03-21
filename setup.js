const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJson = require('./package.json');
const jestJson = require('./jest.json');
const devDependencies = require('./devDependencies.json');

const deleteFile = (fileName) => fs.unlinkSync(path.join(process.cwd(), fileName));
const writeFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data);

console.log('🔄 Please wait...');

packageJson.scripts.start = `${packageJson.scripts.start} --config ../../../../rn-cli.config.js`;
packageJson.jest = Object.assign(packageJson.jest, jestJson);
writeFile('package.json', JSON.stringify(packageJson, null, 2));

execSync(`npm i ${devDependencies.join(' ')} --save-dev --save-exact`);

deleteFile('App.js');
deleteFile('__tests__/App.js');
deleteFile('.flowconfig');
deleteFile('devDependencies.json');
deleteFile('jest.json');
deleteFile('README.md');
deleteFile('LICENSE');
deleteFile('setup.js');

console.log('✅ Setup completed! You can now start with: npm start');
