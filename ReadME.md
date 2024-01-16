
# Excel Date to ISO Date Converter

In Excel, dates are stored as serial numbers where the integer part represents the number of days since a specific base date (January 1, 1900, or January 1, 1904, depending on Excel settings), and the decimal part represents the fraction of the day.This npm package provides a utility function to convert Excel dates to ISO format while ignoring the timezone. It exports a single function, `getISODateFromExcel`.

## Installation

Install the package using npm:

```bash
npm install excel-date-to-iso
const { getISODateFromExcel } = require('excel-date-to-iso');

try {
  // Replace with your Excel date
  const excelDate = 44244;
  
  // Convert Excel date to ISO format
  const isoDate = getISODateFromExcel(excelDate);
  
  // Output the result
  console.log(`Excel Date: ${excelDate} => ISO Date: ${isoDate}`);
} catch (error) {
  console.error(error.message);
}

