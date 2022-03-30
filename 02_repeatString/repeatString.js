const repeatString = function(word,number) {
    let words='';
    if (number<0){
        return 'ERROR'
    }
    for (i=0; i<number; i++){
        words = words+word;
    } return words
};

// Do not edit below this line
module.exports = repeatString;
