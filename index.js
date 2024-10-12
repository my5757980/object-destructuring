var person = {
    name: "john",
    age: 25,
    id: 1,
};
function greetFunction(_a) {
    var name = _a.name, age = _a.age, id = _a.id;
    console.log("Hello ".concat(name));
    console.log("I am ".concat(age));
    console.log("My id num ".concat(id));
}
greetFunction(person);
// console.log(person.name);
// //object destructuring
// const {age,id} = person
// console.log(age);
// console.log(id);
