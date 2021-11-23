//Time: 20:06
function Queue() {
    const collenction = [];

    this.enqueue = function (v) {
        collenction.push(v);
    }

    this.print = () => {
        console.log(collenction);
    }
}

let c = new Queue();
c.enqueue(1);
c.enqueue(2);
c.print();