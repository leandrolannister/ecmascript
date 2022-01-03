const mySet = function () {
    const collenction = [];

    this.has = (value) => {
        if (collenction.indexOf(value) == -1) {
            return true;
        }
        return false;
    }

    this.push = (value) => {
        if (this.has(value)) {
            collenction.push(value);
        }
    }

    this.show = () => {
        console.log(collenction);
    }

    this.splice = (value) => {
       // try {
            if (this.has(value))
                throw new Error('Valor não existe');

            collenction.splice(
                collenction.indexOf(value),1)
        // } catch (error) {
        //     console.log(`${error}`);
        // }
    }
}

let set = new mySet();
set.push(1);
set.push(2);
set.push(3);
set.push(4);
set.splice(40)

set.show();


