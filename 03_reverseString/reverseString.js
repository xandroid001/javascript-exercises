const reverseString = function(string) {
    splitString=string.split('');
    reverseArray=splitString.reverse();
    return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
