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

    this.union = function (otherSet) {
        let unionSet = new mySet();

        collection.forEach((v) => {
            unionSet.add(v);
        });

        otherSet.forEach((v) => {
            unionSet.add(v);
        });

        return unionSet.values();
    }
}

let set = new mySet();
set.add(1);
set.add(2);
set.add(3);
set.remove(2);
set.union([2]);
console.log('Union', set.union([2,1]));
console.log('Size', set.size());
console.log('Values', set.values());
