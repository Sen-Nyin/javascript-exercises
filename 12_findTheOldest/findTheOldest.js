const findTheOldest = function (arr) {
  //   let age = 0;
  //   return arr.reduce((oldest, person) => {
  //     if (person.yearOfDeath) {
  //       if (person.yearOfDeath - person.yearOfBirth > age) {
  //         age = person.yearOfDeath - person.yearOfBirth;
  //         return person;
  //       }
  //     } else {
  //       let year = new Date().getFullYear();
  //       if (year - person.yearOfBirth > age) {
  //         age = year - person.yearOfBirth;
  //         return person;
  //       }
  //     }
  //     return oldest;
  //   }, 0);

  return arr.reduce((oldest, person) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
    return currentAge > oldestAge ? person : oldest;
  });
};

const getAge = (birth, death) => {
  if (!death) death = new Date().getFullYear();
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
