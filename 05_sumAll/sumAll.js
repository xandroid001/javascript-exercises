const sumAll = function(start,end) {
    let sum=0;
    if (typeof(start)=="number" && typeof(end)=="number" && start>0 && end>0){
        start1 = start;
        end1 = end;
        if(start>end){
            start1 = end;
            end1 = start;
        }
        for(let i=start1; i<=end1; i++){
            sum += i;
        }return sum;
    } else {
    } return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;
