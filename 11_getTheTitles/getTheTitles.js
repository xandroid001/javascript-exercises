// const getTheTitles = function(array) {
//     titlesArr=[];
//     for (elem of array){
//         titlesArr.push(elem.title)
//     }
//     return titlesArr;
// };

const getTheTitles = function(object) {
    return object.map(book => book.title)
}

// Do not edit below this line
module.exports = getTheTitles;
