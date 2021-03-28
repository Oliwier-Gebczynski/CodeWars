function filter_list(l) {
    const indexArray = [];
    for(let i=0; l.length -1 >= i; i++){
        if(typeof l[i] == "string"){
            indexArray.push(i);
        }
    }
    for(let i = indexArray.length -1 ; i >= 0; i-- ){
        l.splice(indexArray[i], 1);
    }
    return l;
}

