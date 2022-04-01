const getTheTitles = function(array) {
    titlesArr=[];
    for (elem of array){
        titlesArr.push(elem.title)
    }
    return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
