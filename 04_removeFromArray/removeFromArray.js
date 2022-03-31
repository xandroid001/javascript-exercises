const removeFromArray = function(array, ...testParam) {
    newArray = array;
    for (param of testParam){
        index = newArray.indexOf(param);
        if (index<0){
            continue
        }
        newArray.splice(index, 1);
    } return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
