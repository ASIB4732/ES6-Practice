const number =[2,3,4,5,6,7,8,9,10];
const output=[0];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result=element*element;
    output.push(result);


}
console.log(output);

const num =number.map(function(element){
    return element*element;
})
console.log(num);

const results=number.map(x => x*x);
console.log(results);

const filter=number.filter(s => s>5);
console.log(filter);