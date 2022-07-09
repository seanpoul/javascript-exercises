const reverseString = function (str) {
    let final = ""
    for (let i = str.length; i > 0; i--) {
        final += str.substr(i -1, 1);
    }
    return final
};

// Do not edit below this line
module.exports = reverseString;
