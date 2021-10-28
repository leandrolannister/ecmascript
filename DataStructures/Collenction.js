function mySet(){
    let collection = [];
 
    this.has = function(element){
       return (collection.indexOf(element) === -1)
    };
 
    this.values = () =>{
       return collection;
    }
 
    this.add = function(element){
       if(this.has(element)){
          collection.push(element);      
       }
       return;
    }
 
 }
 
 let set = new mySet();
 set.add(1);
 set.add(2);
 set.add(1);
 console.log(set.values());
 