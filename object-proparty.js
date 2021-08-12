const students = [
    {name:"asib",id:"5137"},
    {name:"wakid",id:"5088"},
    {name:"shaown",id:"5089"},
    {name:"arafat",id:"5047"},
    {name:"nahid",id:"5115"},
    {name:"shakil",id:"5110"}
]


const result =students.map(s => s.name);
console.log(result);


const sun =students.filter(s => s.id>5100);
console.log(sun);


const output =students.find(s => s.id>5120);
console.log(output);













