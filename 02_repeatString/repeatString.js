let num = 0
let string
let i = 0
let final

const repeatString = function (string, num) {
    if (num < 0) {
        return "ERROR";
    }

    for (i = 0; i < num; i++); {
        final = string.repeat(num)
    }

    return final
};

// Do not edit below this line
module.exports = repeatString;
