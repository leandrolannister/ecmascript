// Ordenar considerando apenas as letras em um array de numeros e letras
 ;

values.sort(function(a,b){
  return a.replace(/[^0-9]/g, '') - b.replace(/[^0-9]/g, '');
});

console.log(values);

