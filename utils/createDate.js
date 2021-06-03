const dayjs = require("dayjs");

const createDate = () => dayjs();

const createDateWithFormat = () =>
  createDate().format("dddd, MMMM D, YYYY h:mm A");

const getSecondsDifference = date => createDate().diff(date, "s", true);

module.exports = {
  createDate,
  createDateWithFormat,
  getSecondsDifference
};
