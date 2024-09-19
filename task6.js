function filterWords(array){
    const filtered = [];
    const removed = [];
    const regex = /^[a-zA-Z0-9]+$/;
    for(let i = 0; i < array.length; i++){
        if(array[i].match(regex)) filtered.push(array[i]); else removed.push(array[i])
    }
    return `filtered: ${filtered}\nremoved: ${removed}`
}

console.log(filterWords(["Luka","Ni@","Nika"]))