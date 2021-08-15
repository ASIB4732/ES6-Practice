// 2 ta mathod same kinto ES6 a amra class dia korbo.
class parson {
    constructor(firstName,lastName,salary){
        this.firstName= firstName;
        this.lastName= lastName;
        this.salary= salary;
    }
}


const heroparson1= new parson("asibur","rahman",20000);
const heroparson2= new parson("atikur","rahman",30000);


console.log(heroparson1,heroparson2);










function hero(firstName,lastName,salary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.salary=salary;
}

const man=new hero("ami","tomi",1000);
console.log(man);












