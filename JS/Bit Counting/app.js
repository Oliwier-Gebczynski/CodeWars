function countBits(n) {
    let bitsString = (n>>>0).toString(2);
    let result = 0;
    for(let i=0; bitsString.length > i; i++ ){
        if(bitsString[i] == "1"){
            result += 1;
        }
    }
    return result;
};
