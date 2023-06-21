
//array of object
const products=[
    {name:'laptop',price:24453,brand:'lenovo'},
    {name:'mobile',price:14453,brand:'sam'},
    {name:'pc',price:5453,brand:'ip'}
]

//map====loop through and return
const brands=products.map(x=>x.brand);
console.log(brands);


//foreach====no return
products.forEach(element=>console.log(element.name));

products.forEach(element => {
     console.log(element);
});


//filter===condition base new array return
const cheap=products.filter(element=>element.price<=15000);
console.log(cheap);


//find====condition base but only one value return
const find=products.find(element=>element.price<=15000);
console.log(find);

const findName=products.find(element=>element.name.includes('o'));
console.log(findName);














