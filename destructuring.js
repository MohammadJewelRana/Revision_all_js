//array destructuring

const numbers=[35,25,23];
const [p,q]=numbers;

const [x,y,...z]=[35,46,26,2,53];
console.log(x);
console.log(y);
console.log(z);


///object destructuring
const num=[45,634,75,4];
const student={
    name:'jewel',
    age:47,
    profession:['cse','it','marketing'],
    machine: 'mac',
    specification: {
        height:35,
        weight:35
    }
}

const {machine,nameStudent} =student;
const {weight,height}=student?.specification;

const [job]=student.profession;
console.log(job);

student.profession.forEach(element => {
    console.log(element);
});


const {name,age}={name:"jewel",age:40};









