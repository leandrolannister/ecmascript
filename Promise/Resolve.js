const makeServerRequest = new Promise((resolve, reject) =>{
    let serverResponse = true;
 
    if(serverResponse){
       resolve('We got the data');
    }else{
       reject('Data is not received');
    }
 });
 
 console.log(makeServerRequest);
 
 