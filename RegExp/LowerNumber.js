// {1,} -> Indica que a letra a deve se repetir no máximo 4x

let str = 'Leaaaandro';
let regexp = /Lea{4,}ndro/g;

console.log(str.match(regexp));