function count(max, min){
  if(max < min){ return []; }
  
  const array = count(max - min);
  array.push(max);  

  return array;
}

console.log(count(5,3));