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
      const REMOVE_ELEMENT = 1;
      if(this.has(element)){
         return;    
      }
      
      collection.splice(
         collection.indexOf(element),REMOVE_ELEMENT
      );
   }
 }
 
 let set = new mySet();
 set.add(1);
 set.add(2);
 set.add(3);
 set.remove(2);
 console.log(set.values());
 