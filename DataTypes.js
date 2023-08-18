//  Boolean 
var isCompleted = false;
console.log(isCompleted,typeof isCompleted);
if(isCompleted)
console.log("it's done");
// Number
var pi = 3.1415;
console.log(pi,typeof pi);
// String
var name = "Brendan";
var lastName = 'Eich';
var fullName = `Name is ${name} ${lastName}`;
console.log(fullName,typeof fullName);

// BigInt
var moon = 18754698563214569875412123654789n;
console.log(moon,typeof moon);

// Symbol 
var unique = Symbol("my-key");
console.log(unique,typeof unique);

var another = Symbol("my-key");
console.log(another,typeof another);
console.log(unique == another) //false because it does not consider multiple symbol with the same value as equal

//null
var address = null ;//used as a value , means there is need for addressed , but i dont have right now
console.log(address, typeof address);
//null is explicity says this value does not exist, undefined is implicitly say this value does not exist.

//undefined
var undef = undefined; //this means that variable undef is not defined, when js looks up property and they are not found, rather than giving an error it say ,its undefined
console.log(undef , typeof undef);

//object 
var id = 1;
var name = "Brendan";
//person is object
var person = {
    id:1,
    name: "Brenden",
    age:null          // age is defined but value is explicitly null
}
//objects are not basic data types, they are composite data types
console.log(person,typeof person);
console.log(person.age) //gives undefined
