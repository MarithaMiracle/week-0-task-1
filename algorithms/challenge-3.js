function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !==0) || (year % 400 === 0);
}

let firstYear = 2016;
let secondYear = 2030;

console.log(firstYear + " is a leap year: " + isLeapYear(firstYear));
console.log(secondYear + " is a leap year: " + isLeapYear(secondYear));

module.exports = isLeapYear;
