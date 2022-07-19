const sumAll = function (a, b) {
  let sum = 0;
  if (
    // isNaN(a) ||
    // isNaN(b) ||
    !Number.isInteger(a) ||
    !Number.isInteger(b) ||
    a < 0 ||
    b < 0
    // typeof a === "string" ||
    // typeof b === "string"
  ) {
    return "ERROR";
  } else if (a > b) {
    let c = a;
    a = b;
    b = c;
  }
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
