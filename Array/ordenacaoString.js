// Ordenar considerando apenas numeros em um array de numeros e letras
const values = [];

values.push('x' + 12);
values.push(10 + 'l');
values.push(2 + 'f');
values.push(1 + 'b');

values.sort(function(a,b){
  return a.replace(/[^0-9]/g, '') - b.replace(/[^0-9]/g, '');
});

console.log(values);

