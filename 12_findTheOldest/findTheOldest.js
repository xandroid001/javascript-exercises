const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  
// break
const findTheOldest = function(object) {
    let currentYear = new Date().getFullYear()
    let oldest=1;
    let oldestAge=1;
    for (elem of object){
        let checkAge = (elem.yearOfDeath||currentYear)-elem.yearOfBirth;
        if (checkAge<oldestAge){
            continue
        }
        oldestAge = checkAge;
        oldest = elem
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
