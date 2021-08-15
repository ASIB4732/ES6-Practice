const normalParson ={
    firstname:"asibur",
    lastName:"Rahman",
    salary:20000,
    fullName:function(){
        console.log(this.firstname,this.lastName);
    },
    chargeBill:function(Bill,tax,bunnas){
        console.log(this);
        this.salary=this.salary-Bill-tax-bunnas;
        return this.salary;
    }
}


const parson={
    firstName:"hero",
    lastName:"alom",
    salary:11000
}

const paesonChargeBill=normalParson.chargeBill.bind(parson);
paesonChargeBill(1500,600,400);
console.log(parson.salary);




const heroparson={
    firstName:"hero",
    lastName:"kalom khan",
    salary:7000
}

normalParson.chargeBill.call(heroparson, 300, 400, 600);


console.log(heroparson.salary);





const thirdparson={
    firstName:"hero no.1",
    lastName:"shakib khan",
    salary:80000
}
normalParson.chargeBill.apply(thirdparson,[8000,10000,3000])

console.log(thirdparson.salary);
























