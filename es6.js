
const num=[45,634,75,4];
const stdudent={
    name:'jewel',
    age:47
}

//template string
const about=` my name is ${stdudent.name} and age is ${stdudent.age}`;
console.log(about);


//arrow function
const get=()=>55;
console.log(get());
const fifty=(num)=>num+5;
const isEven=x=>x%2==0;


//spread operator
const newNumbers= [...num];
newNumbers.push(55);
newNumbers.push(45);
console.log(newNumbers);
console.log(num);

const current=[...num,4,5,63,76,36];//spread operator and add element
console.log(current);