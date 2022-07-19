const removeFromArray = function (...args) {
  // use rest ...args in function to turn all arguments into an array.
  // this means any number of arguments could be provided to the function
  // the first argument, and therefore first item in the new array will be the array passed

  // get the array out of args
  const myArray = args[0];
  // blank array ready to push values in
  const myNewArray = [];

  // check each item in the array
  myArray.forEach((item) => {
    // if the item does not exist in args, push it to the new array
    // this is checking the args array, not the array found in args[0]
    // therefore items in the args array will not be included in the new array
    if (!args.includes(item)) {
      myNewArray.push(item);
    }
  });
  return myNewArray;
};

// Do not edit below this line
module.exports = removeFromArray;
