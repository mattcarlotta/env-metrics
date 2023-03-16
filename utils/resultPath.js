const { readFileSync } = require("fs");
const { join } = require("path");

const filePath = join(process.cwd(), "result.json");

const readResultFile = () => {
    const file = readFileSync(filePath, { encoding: "utf-8" });

    return JSON.parse(file);
};

module.exports = {
    filePath,
    readResultFile
};
