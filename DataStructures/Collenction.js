//Time: 14.51
function mySet() {
    let collection = [];
 
    this.has = function (element) {
        return (collection.indexOf(element) === -1)
    };
 
    this.values = () => {
        return collection;
    }
 
    this.add = function (element) {
        if (this.has(element)) {
            collection.push(element);
        }
        return;
    }
 
    this.remove = function (element) {
        const REMOVE_ELEMENT = 1;
        if (this.has(element)) {
            return;
        }
 
        collection.splice(
            collection.indexOf(element), REMOVE_ELEMENT
        );
    }
 
    this.size = () => {
        return collection.length;
    }
 
    this.union = function () {
        let unionSet = new mySet();
        const otherSet = [2,1];
 
        collection.forEach((v) => {
            unionSet.add(v);
        });
 
        otherSet.forEach((v) => {
            unionSet.add(v);
        });
 
        return unionSet.values();
    }
 
    this.difference = function(){
     const otherSet = new mySet();
     otherSet.add(1); 
     otherSet.add(3);
 
     collection.forEach((v) => {
       if (otherSet.has(v)){
          otherSet.add(v);
       }
     });       
     return otherSet.values();
  }
 }
 
 let set = new mySet();
 set.add(1);
 set.add(2);
 set.add(3);
 set.remove(2);
 set.union();
 console.log('Union:', set.union());
 console.log('Size:', set.size());
 console.log('Values:', set.values());
 console.log('Difference:', set.difference());
 