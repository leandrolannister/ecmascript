function jaRealizada() {
    return new Promise((resolve, reject) => {
       return resolve(true);
    });
  }
  
  function nome(){
    return console.log('Nome: Leandro');
  }

  jaRealizada()
  .then(nome)
  .catch((erro) => {
     console.log('Error', err);
  })
  .finally( () => {
     console.log('Sempre será chamada com ou sem erro');      
  });