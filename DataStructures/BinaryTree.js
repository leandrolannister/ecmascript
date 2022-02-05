class Node {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    }
 }
 
 const depthFirstValues = (root) => {
    const stack = [root];
    
    while (stack.length > 0) {
       let current = stack.pop();
       
       console.log(current.val);
 
       if (current.left) stack.push(current.left);
       if (current.right) stack.push(current.right); 
    }
 }
 
 const a = new Node('a');
 a.right  = new Node('b');
 a.left = new Node('c');
 
 
 depthFirstValues(a);
 
 
 
 