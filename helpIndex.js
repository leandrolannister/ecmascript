const mySet = function(){
   let collection = [];
 
   this.has = function(value){
       return (collection.indexOf(value) == -1);
   }
 
   this.add = function(value){
       if(this.has(value)){
          collection.push(value);    
       }
   }
 
   this.show  = () => {
       console.log(collection);
   }
 
   this.remove = function(value){
       if(this.has(value))
         return;
 
       collection.splice(
           collection.indexOf(value),1
       )  
   }
 
   this.union = () => {
      const arr = [1,2,3,4];
 
      for(let row in arr){
        if(this.has(arr[row])){
          collection.push(arr[row]);    
        }
      }
   }
 
   this.diff = () => {
       const arr = [1,2,5,3,8];
       const diff = [];
 
       arr.forEach( (v) => {
          if(this.has(v)){
              diff.push(v);
          }   
       });
       console.log('Diffs:', diff);
   }
 
   this.size = () => {
      console.log('Size of Collenction:', collection.length);
   }
 
   this.subset = function(otherSet){
      console.log(otherSet.value());
   }
 }
 let set = new mySet();
 let setB = new mySet();
 set.add(1);
 set.add(2);
 
 setB.add(2);
 setB.add(3);
 
 console.log(setB);
 