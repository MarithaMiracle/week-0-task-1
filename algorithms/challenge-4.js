function findSmallest(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

let numberI = 101;
let numberII = 202;
let numberIII = 303;

let smallest = findSmallest(numberI, numberII, numberIII);
console.log("The smallest number is " + smallest);

module.exports = findSmallest;
