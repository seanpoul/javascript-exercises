const leapYears = function (leapYear) {
    if (leapYear % 100 == 0 && !(leapYear % 400 == 0)) {
        return false
    }
    else if (leapYear % 4 == 0) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
