
const SECONDS_IN_DAY = 24 * 60 * 60;
const MISSING_LEAP_YEAR_DAY = SECONDS_IN_DAY * 1000;
const MAGIC_NUMBER_OF_DAYS = 25567 + 2;

const isValidDate = (date) =>
  Object.prototype.toString.call(date) === '[object Date]' &&
  !isNaN(date.getTime());
getISODateFromExcel = (excelDate) => {
  if (!Number(excelDate)) {
    throw new Error('Wrong Input.Input should be a Number');
  }
  const date = new Date((excelDate - MAGIC_NUMBER_OF_DAYS)*MISSING_LEAP_YEAR_DAY);

  if (!isValidDate(date)) {
    throw new Error('Wrong excel date Input');
  }
  return date.toISOString().substring(0,10);
};

module.exports={getISODateFromExcel}