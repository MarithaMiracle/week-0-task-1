function classifyTemperature(temp) {
    if (temp <= 0) {
        return "Freezing";
    } else if (temp > 0 && temp < 10) {
        return "Cold";
    } else if (temp > 10 && temp < 20) {
        return "Mild";
    } else if (temp > 20 && temp < 30) {
        return "Warm";
    } else {
        return "Hot";
    }
}

let temp1 = -4;
let temp2 = 14;
let temp3 = 24;

console.log(temp1 + " is " + classifyTemperature(temp1));
console.log(temp2 + " is " + classifyTemperature(temp2));
console.log(temp3 + " is " + classifyTemperature(temp3));

module.exports = classifyTemperature;
