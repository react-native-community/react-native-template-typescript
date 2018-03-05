const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');
const devDependencies = require('../devDependencies.json');

if (!packageJson.devDependencies) {
    packageJson.devDependencies = {};
}

packageJson.devDependencies = Object.assign(packageJson.devDependencies, devDependencies);

const data = JSON.stringify(packageJson, null, 2);

fs.writeFileSync(path.join(process.cwd(), 'package.json'), data);
