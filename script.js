const names = [
    ["hemru", "kavindu", "nimal"],
    ["Aravinda", "Gune", "Namal", "jothi"],
]

for (let i = 0; i <= names.length-1; i++) {
    let count = names[i];
    for(let j = 0; j < count.length; j++){
        console.log(`Row ${i+1} --> ${names[i][j]}`);
    }
}