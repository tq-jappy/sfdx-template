// Code to run post npm install

const path = require('path');
const fs = require('fs-extra');

const directories = [
    'fonts',
    'icons',
    'images',
    'styles'
];

// Create symlinks from node_modules -> /your/public/folder/

directories.forEach((folderName) => {
    const srcPath = path.resolve(__dirname, `../node_modules/@salesforce-ux/design-system/assets/${folderName}`);

    // Choose the target path based on your project
    // Serve this up using your static web server
    const targetPath = path.resolve(__dirname, `public/css/lds/${folderName}`);

    fs.ensureSymlinkSync(srcPath, targetPath);
});