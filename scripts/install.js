const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');
const devDependencies = require('../devDependencies.json');

const isInScriptsDirectory = fs.existsSync(path.join(process.cwd(), 'install.js'));
const pathPrefix = isInScriptsDirectory ? '../' : '';

const deleteFile = (fileName) => fs.unlinkSync(path.join(process.cwd(), `${pathPrefix}${fileName}`));
const writeFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), `${pathPrefix}${fileName}`), data);

(() => {
    deleteFile('App.js');
})();

(() => {
    if (!packageJson.devDependencies) {
        packageJson.devDependencies = {};
    }

    packageJson.devDependencies = Object.assign(packageJson.devDependencies, devDependencies);
    const data = JSON.stringify(packageJson, null, 2);
    writeFile('package.json', data);
})();
