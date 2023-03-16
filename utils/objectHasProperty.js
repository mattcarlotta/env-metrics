module.exports = (result, prop) =>
    typeof result === "object" &&
    Object.prototype.hasOwnProperty.call(result, prop);
