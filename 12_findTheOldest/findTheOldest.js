// break
// const findTheOldest = function(object) {
//     let currentYear = new Date().getFullYear()
//     let oldest=1;
//     let oldestAge=1;
//     for (elem of object){
//         let checkAge = (elem.yearOfDeath||currentYear)-elem.yearOfBirth;
//         if (checkAge<oldestAge){
//             continue
//         }
//         oldestAge = checkAge;
//         oldest = elem
//     }
//     return oldest;
// };

const findTheOldest = function(object) {
  const sortAge = object.sort((a,b) => {
    const currentYear = new Date().getFullYear()
    aAge = (a.yearOfDeath || currentYear) - a.yearOfBirth;
    bAge = (b.yearOfDeath || currentYear) - b.yearOfBirth;
    return bAge - aAge;
  })
  return sortAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
