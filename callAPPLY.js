// three mathoth is same result ..........

const normalParson ={
    firstname:"asibur",
    lastName:"Rahman",
    salary:20000,
    fullName:function(){
        console.log(this.firstname,this.lastName);
    },
    chargeBill:function(Bill){
        console.log(this);
        this.salary=this.salary-Bill;
        return this.salary;
    }
}
normalParson.chargeBill(5000);
console.log(normalParson.salary);



console.log("sacand part");


const parson={
    firstName:"hero",
    lastName:"alom",
    salary:11000
}

const paesonChargeBill=normalParson.chargeBill.bind(parson);
paesonChargeBill(1500);
console.log(parson.salary);



console.log("third part");

const heroparson={
    firstName:"hero",
    lastName:"kalom khan",
    salary:7000
}

normalParson.chargeBill.call(heroparson,300);
normalParson.chargeBill.call(heroparson,70);
normalParson.chargeBill.call(heroparson,70);
normalParson.chargeBill.call(heroparson,0);

console.log(heroparson.salary);




const thirdparson={
    firstName:"hero no.1",
    lastName:"shakib khan",
    salary:80000
}
normalParson.chargeBill.apply(thirdparson,[8000])

console.log(thirdparson.salary);





























