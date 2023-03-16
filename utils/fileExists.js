const { statSync } = require("fs");

const fileExists = file => {
    try {
        return statSync(file).isFile();
    } catch (e) {
        return false;
    }
};

module.exports = fileExists;
