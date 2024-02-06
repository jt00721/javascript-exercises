const sumAll = function(int1, int2) {
    //variable to hold result
    //iterate through each number from int1 to int2
    //add each number to result every loop
    //return result
    if (!(typeof(int1) === "number") || !(typeof(int2) === "number")) {
        return "ERROR"
    }

    let isInt1Negative = int1 < 0;
    let isInt2Negative = int2 < 0;

    if (isInt1Negative || isInt2Negative) {
        return "ERROR"
    }
    let result = 0;

    let isInt1Bigger = int1 > int2;
    if (isInt1Bigger) {
        for (; int2 <= int1; int2++) {
            result += int2;
        }
    } else {
        for (; int1 <= int2; int1++) {
            result += int1;
        }
    }
    
    
    return result;
};

// Do not edit below this line
module.exports = sumAll;
