const Priority = function(){
    let arr = [];

    this.show = () => {
        console.log(arr);
    }

    this.push = (element) => {
        arr.push(element);    
    }

    this.order = (element) => {
        //if (arr.length == 0){
            this.push(element)
        //}else {
            for (let row = 0; row < arr.length; row++){
                  arr.sort(this.orderBy);
            }
        //}
    }

    this.orderBy = (a,b) => {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    }
}

const p = new Priority();
p.order(['Soares',2]);
p.order(['Ribeiro',3]);
p.order(['Leandro',1]);
p.order(['Ana',0]);
p.order(['Bruno',10]);
p.show();