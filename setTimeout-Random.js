

setInterval(() => {
    const randomNumber=Math.random()*1000;
    const raoundNumber= Math.round(randomNumber);
    console.log(raoundNumber);
    const date =new Date;
    console.log(date);
}, 2000);