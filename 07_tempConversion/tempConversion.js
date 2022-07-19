const ftoc = function (f) {
  // let celcius = (f - 32) * (5 / 9);
  // return celcius.toFixed(1);
  let celcius = Math.round((f - 32) * (5 / 9) * 10) / 10;
  return celcius;
};

const ctof = function (c) {
  // let farenheit = c * (9 / 5) + 32;
  // return farenheit.toFixed(1);
  let farenheit = Math.round((c * (9 / 5) + 32) * 10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
