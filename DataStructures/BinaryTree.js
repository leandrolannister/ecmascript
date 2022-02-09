class Node {
   constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
   }
}

function builtTree(root) {
   const stack = [root];

   while (stack.length > 0) {
       let current = stack.pop();

       console.log(current.val);

       if (current.left){ stack.push(current.left); }
       if (current.right){ stack.push(current.right); }

   }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.left = c;
a.right = b;
c.left = d;


builtTree(a);
