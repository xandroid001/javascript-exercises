const caesar = function(word,shift) {
    splitArr = word.split('');

    // let unicode = [];
    // for(letter of splitArr){
    //     unicode.push(letter.charCodeAt());
    // }

    let unicodeArr = splitArr.map(letter => letter.charCodeAt())

    // let shiftArr = unicodeArr.map(unicode => unicode + shift);

    // let shiftArr = [];
    // for (unicode of unicodeArr){
    //     if(97 <= unicode <= 122 || 65 <= unicode <= 90){
    //         let sum = unicode + shift;
    //         if(sum>122 || sum>90){
    //             shiftArr.push(sum-26)
    //         } else if(sum<97 || sum<65){
    //             shiftArr.push(sum+26)
    //         } else {
    //             shiftArr.push(sum);
    //         }
    //     } else {
    //         shiftArr.push(unicode);
    //     }
    // }

    let shiftArr = [];
    for (unicode of unicodeArr){
        let sum = unicode + shift;
        let newUni=1;
        if(97 <= unicode && unicode <= 122){
            if(sum>122){
                newUni = (sum-122)%26+96;
            } else if(sum<97){
                newUni = 123-(97-sum)%26;
            } else{
                newUni = sum;
            }
        } else if (65 <= unicode && unicode <= 90){
            if(sum>90){
                newUni = (sum-90)%26+64;
            } else if(sum<65){
                newUni = 91-(65-sum)%26;
            } else {
                newUni = sum;
            }
        } else {
            newUni = unicode;
        }
        shiftArr.push(newUni);
    }

    let caesarArr = shiftArr.map(uniNum => String.fromCharCode(uniNum));
    return caesarArr.join('');
};

// Do not edit below this line
module.exports = caesar;
