const palindromes = function (string) {
    alterString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    return (
        alterString.split("")
            .reverse()
            .join("") == alterString
    );

};

// Do not edit below this line
module.exports = palindromes;
