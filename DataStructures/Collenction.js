//TIME: 11:14
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
 
   this.remove = function(element){
      if(this.has(element)){
         return false;    
      }
 
      let indexArr = collection.indexOf(element);
      collection.splice(indexArr,1);
 
      return true;
   }
 }
 
 let set = new mySet();
 set.add(1);
 set.add(2);
 set.add(3);
 set.remove(2);
 console.log(set.values());
 