const caesar = function(word,shift) {
    split = word.split('');

    unicode = split.map(letter => letter.charCodeAt());

    // unicodeShifted = unicode.map(number => {
    //     let anchor = number;
    //     sum = number + shift;
    //     if (number >= 65 && number <= 90) {
    //         if (shift >= 0) {anchor = (sum - 65) % 26 + 65};
    //         if (shift < 0) {anchor = 90 - (90 - sum) % 26};
    //     }
    //     if (number >= 97 && number <= 122) {
    //         if (shift >= 0) {anchor = (sum - 97) % 26 + 97};
    //         if (shift < 0) {anchor = 122 - (122 - sum) % 26};
    //     }
    //     unicodeShifted.push(anchor)
    // });

    unicodeShifted = []
    for (number of unicode){
        let anchor = number;
        sum = number + shift;
        if (number >= 65 && number <= 90) {
            if (shift >= 0) {anchor = (sum - 65) % 26 + 65};
            if (shift < 0) {anchor = 90 - (90 - sum) % 26};
        }
        if (number >= 97 && number <= 122) {
            if (shift >= 0) {anchor = (sum - 97) % 26 + 97};
            if (shift < 0) {anchor = 122 - (122 - sum) % 26};
        }
        unicodeShifted.push(anchor)
    }

    caesarAns = unicodeShifted.map(unicode => String.fromCharCode(unicode));

    return join = caesarAns.join('');
    }

// Do not edit below this line
module.exports = caesar;
