class father {
    constructor(){
        this.fatherName='adom alayheosallam';
    }
}


class Child extends father{
    constructor(name){
        super();
        this.name=name;
    }
    full(){
        return this.name+" "+this.fatherName;
    }

}
const baby=new Child("asibur rahman");
const babo=new Child("rifat");

console.log(baby.full());
console.log(babo.full());