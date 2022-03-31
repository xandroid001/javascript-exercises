const palindromes = function (string) {
    lowerCase = string.toLowerCase()
    noSpace = lowerCase.replace(/[^A-Za-z0-9]/g, '');
    split = noSpace.split('');
    reverse = split.reverse();
    palindrome = split.join('');
    if(noSpace===palindrome){
        return true;
    } return false;
};

// Do not edit below this line
module.exports = palindromes;
