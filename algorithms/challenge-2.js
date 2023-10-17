function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

let firstNumber = 44;
let secondNumber = -666;
let thirdNumber = 0;

console.log(firstNumber + " is " + checkNumber(firstNumber));
console.log(secondNumber + " is " + checkNumber(secondNumber));
console.log(thirdNumber + " is " + checkNumber(thirdNumber));

module.exports = checkNumber;
