const createFile = require("./createFile");
const fileExists = require("./fileExists");
const { filePath, readResultFile } = require("./resultPath");

const writeResultToFile = result => {
  try {
    let file = {};
    if (fileExists(filePath)) file = readResultFile();

    const combinedFile = Object.assign(file, result);

    createFile(filePath, JSON.stringify(combinedFile, null, 2));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = writeResultToFile;
