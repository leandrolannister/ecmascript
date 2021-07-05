function serverResp(){
   return Promise.reject('Erro to acess server');
}

serverResp().catch(error => {
  console.log(error);
});