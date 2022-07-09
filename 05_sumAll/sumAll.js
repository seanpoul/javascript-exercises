const sumAll = function (num1, num2) {
    let sum = 0
    if (num1 < 0 || num2 < 0 || Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
        return "ERROR"
    }
    else if (num1 < num2) {
        for (num1; num1 <= num2; num1++) {
            if (num1 <= num2) {
                sum += num1;
            }
        }
    }
    else if (num2 < num1) {
        for (num1; num1 >= num2; num1--) {
            if (num1 >= num2) {
                sum += num1;
            }
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
