const convertToCelsius = function(fTemp) {
  // number.toFixed(decimal_digits);
  // F to C
  let cTemp = (fTemp - 32) * (5/9);

  return parseFloat(cTemp.toFixed(1));
};

const convertToFahrenheit = function(cTemp) {
  // number.toFixed(decimal_digits);
  // C to F
  let fTemp = (cTemp * (9/5) + 32);

  return parseFloat(fTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
