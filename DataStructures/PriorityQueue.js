function PriorityQueue() {
    let collenction = [];

    this.show = () => {
        (console.log(collenction));
    }

    this.add = (element) => {
        collenction.push(element);
    }

    this.orderBy = (element) =>{
       if (collenction.length === 0){
           collenction.push(element);
       }else {
           for(let row=0; row < collenction.length; row++){
              if (element[1] < collenction[row][1]){
                  collenction.splice(row,0,element);                  
                  break;
              }     
           }
       }
    }
}

let priority = new PriorityQueue();
priority.orderBy(['Ana', 4]);
priority.orderBy(['Ribeiro', 3]);
priority.orderBy(['Soares', 2]);
priority.orderBy(['Leandro', 1]);
priority.show();


