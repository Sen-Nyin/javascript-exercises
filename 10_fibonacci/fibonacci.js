// const fibonacci = function (num) {
//   if (num < 0) return "OOPS";

//   const fib = [];
//   for (let i = 0; i <= num; i++) {
//     if (i === 0 || i === 1) {
//       fib.push(i);
//     } else {
//       fib.push(fib[i - 1] + fib[i - 2]);
//     }
//   }
//   return fib[num];
// };

const fibonacci = function (num) {
  num < 0 && "OOPS";
  const fib = [];
  for (let i = 0; i <= num; i++) {
    i > 1 ? fib.push(fib[i - 1] + fib[i - 2]) : fib.push(i);
  }
  return fib[num];
};
// Do not edit below this line
module.exports = fibonacci;
