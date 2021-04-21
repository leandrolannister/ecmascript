const erros = [];

erros.push('x' + 12);
erros.push(10 + 'l');
erros.push(2 + 'f');
erros.push(1 + 'b');

erros.sort(function(a,b){
  return a.replace(/[^0-9]/g, '') - b.replace(/[^0-9]/g, '');
});

console.log(erros);

