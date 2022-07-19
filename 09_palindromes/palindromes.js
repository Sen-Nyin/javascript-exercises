const palindromes = function (args) {
  let forwardText = args.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let backwardText = args
    .split("")
    .reverse()
    .join("")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");

  return forwardText === backwardText ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
