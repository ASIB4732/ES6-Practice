

console.log(1111);


setTimeout(function(){
    console.log("First set time out",2222);
},1000)


setTimeout(() => {
    console.log("Secund set time out",3333);
},2000)


setInterval(() => {
    console.log("Third set time out",5555);
}, 2000);





setInterval(() => {
    let randomNumber=Math.random()*1000;
    let raoundNumber= Math.round(randomNumber);
    console.log("Fourth set time out",raoundNumber);
}, 2000);



console.log(6666);































