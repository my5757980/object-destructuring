type Tperson = {
    name:string;
    age:number;
    id:number;
}


const person: Tperson = {
    name:"john",
    age:25,
    id:1,
}

function greetFunction({name,age,id}:Tperson){
 
    console.log(`Hello ${name}`);
    console.log(`I am ${age}`);
    console.log(`My id num ${id}`);
}
greetFunction(person)



// console.log(person.name);
// //object destructuring
// const {age,id} = person
// console.log(age);
// console.log(id);