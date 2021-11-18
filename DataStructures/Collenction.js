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
}
let set = new mySet();
set.add(1);
set.add(2);
set.remove(1);
set.union();
set.show();
set.diff();
set.size();
