var Stack = function() {
   this.count = 0;
   this.storage = {};

   //add
   this.push = function(value) {
      this.storage[this.count] = value;
      this.count++;
   }
}

const t = new Stack();
t.push(1);
t.push(2);
console.log(t.storage);

