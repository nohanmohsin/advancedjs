const peoples = 
[
    {id: 21, name:"omar"},
    {id: 31, name:"amar"},
    {id: 41, name:"komar"},
    {id: 51, name:"jamar"}
]
const bigs = peoples.filter(currentname => currentname.id>40);
console.log(bigs);

