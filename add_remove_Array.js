
const products=[
    {  name:'laptop', price:4564},
    {  name:'mobile', price:4564},
    {  name:'pc', price:4564}
    
];

const newProducts={name:'web',price:700};

//copy and ad new products
const newArray=[...products,newProducts];
console.log(newArray);

//remove
const remaining=products.filter(element=>element.name !== 'laptop');
console.log(remaining);











