const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
    if (!packageJson.scripts) {
        packageJson.scripts = {};
    }
    packageJson.scripts = Object.assign(packageJson.scripts, { watch: './node_modules/.bin/tsc -w' })

    const data = JSON.stringify(packageJson, null, 2);
    writeFile('package.json', data);
    execSync(`npm i ${devDependencies.join(' ')} --save-dev --save-exact`);
})();

console.log('✅ Setup completed! You can now delete the scripts folder.')
