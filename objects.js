// javascript is "prototype" based object oriented langauge

//object literal-> {property:value,property:value,....}

var person={id:1};
console.log(person);
person.name = "Brendon";
console.log(person);
person["age"]=67;
console.log(person);
// sometimes key is not valid identifier
//person.401="plan"
person["401"]="plan";
console.log(person);
person["full-name"]="Brendan Eich";
console.log(person);

person.print = function(){
    console.log("hey there! i am a function")
}
console.log(person);
person.print();

delete person.age;
console.log(person);