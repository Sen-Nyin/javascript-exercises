const repeatString = function (text, reps) {
  if (reps < 0) {
    return "ERROR";
  }
  let output = "";
  for (let i = 0; i < reps; i++) {
    output += text;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
