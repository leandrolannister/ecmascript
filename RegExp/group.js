let catSrt = 'cat';
let regExp = /[a-e]at/;

let batSrt = 'bat';
let matSrt = 'mat';

console.log(
    'Cat =>', catSrt.match(regExp)[0],
    'Bat =>', batSrt.match(regExp)[0],
    'Mat =>', matSrt.match(regExp),
);