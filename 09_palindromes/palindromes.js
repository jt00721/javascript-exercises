const palindromes = function (str) {
    let punctuation = '.,/#!$%^&*;:{}=-_`~()'.split("");
    let lowerCaseStr = str.toLowerCase();
    let charactersOfStr = lowerCaseStr.split("");
    let filteredCharactersOfStr = charactersOfStr.filter(character => character != " " && !(punctuation.includes(character)));
    let filteredStr = filteredCharactersOfStr.join("");
    let reverseStr = filteredCharactersOfStr.reverse().join("");
    return filteredStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
