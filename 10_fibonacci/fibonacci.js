const fibonacci = function(number) {
    number = Number(number);
    let x = 0;
    let y = 1;
    if (number===0){
        return x;
    }else if (number===1){
        return y;
    }else if (number<0){
        return 'OOPS'
    }else if (number>1){
        for (let i=0; i<number-1; i++){
            z = x + y;
            x = y;
            y = z;
        }
    }
    return z;
};

// Do not edit below this line
module.exports = fibonacci;
