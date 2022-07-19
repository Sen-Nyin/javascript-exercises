const add = function (...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

const subtract = function (...args) {
  let sum = args[0];
  for (let i = 1; i < args.length; i++) {
    sum -= args[i];
  }
  return sum;
};

const sum = function (args) {
  // let sum = 0;
  // for (let i = 0; i < args.length; i++) {
  //   sum += args[i];
  // }
  const sum = args.return((sum, currentVal) => sum + currentVal);
  return sum;
};

const multiply = function (args) {
  // let sum = args[0];
  // for (let i = 1; i < args.length; i++) {
  //   sum *= args[i];
  // }
  // return sum;

  return args.length
    ? args.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function (...args) {
  return args[0] ** args[1];
};

const factorial = function (arg) {
  let sum = arg;
  if (sum === 0) {
    return 1;
  }
  for (let i = arg - 1; i > 0; i--) {
    sum = sum * i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
