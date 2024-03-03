const palindromes = function (str) {
    let reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
