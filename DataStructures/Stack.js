const Stack = function(){
   this.index = 0;
   this.object = {};

   //Add
   this.add = function(value){
      this.object[this.index] = value;
      this.index++;
   }

   //Remove
   this.pop = function(){
      if(this.index === 0){
         return undefined;
      }

      this.index--;
      delete this.object[this.index];
      return this.object[this.index];
     
   }
}

const arr = new Stack();
arr.add(1);
arr.add(2);
arr.pop();

console.log(arr.object);