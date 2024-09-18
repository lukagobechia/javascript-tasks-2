function digitCounter(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i].toString().length);
    }
    return newArray;
}

console.log(digitCounter([123,12,1,123455]))