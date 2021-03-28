function findOutlier(integers){
    let outlier;
    const controlPoint = [];

    for(let i =0; integers.length > i; i++){
        if(integers[i]%2 == 0){
            controlPoint.push(i);
        }
    }
    if(controlPoint.length == 1){
        for(let i =0; integers.length > i; i++){
            if(integers[i]%2 == 0){
                outlier = integers[i];
            }
        }
    }
    else{
        for(let i =0; integers.length > i; i++){
            if(integers[i]%2 == 1){
                outlier = integers[i];
            }
        }
    }
    return outlier;
}