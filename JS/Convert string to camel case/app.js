function toCamelCase(str){
    if(str == ""){
        return "";
    }

    const wordArray = [...str];
    const signArray = [];

    for(let i=0; wordArray.length > i; i++){
        if(wordArray.indexOf("_") !== -1 ){
            signArray.push(wordArray.indexOf("_"));
            wordArray.splice(wordArray.indexOf("_"), 1);
        }
        else if(wordArray.indexOf("-") !== -1){
            signArray.push(wordArray.indexOf("-"));
            wordArray.splice(wordArray.indexOf("-"), 1);
        }
    }
    let text = wordArray.join("");
    
    for(let i=0; signArray.length > i; i++){
        let index;
        index = signArray[i];
        let sign= text.charAt(index).toUpperCase();
        text = text.replace(text.charAt(index), sign);
    }
    return text;
}

//done