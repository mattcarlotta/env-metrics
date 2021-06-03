const { writeFileSync } = require("fs");

module.exports = (filePath, result) => writeFileSync(filePath, result);
