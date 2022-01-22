//Ordenar objeto por nome ou id
const arr = [['Ana',3],['Bruna',2], ['Cassia',1]];

function asc(a,b,){
    let id = 1;

    if (a[id] > b[id]) return 1;
    if (a[id] < b[id]) return -1;

    return 0;
}

for (let row in arr){
   arr.sort(asc);    
}

console.log(arr);