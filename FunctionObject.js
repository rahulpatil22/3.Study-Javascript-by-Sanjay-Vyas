// compute function
function add(a,b){
    return a + b;
}
console.log(add(5,7));


// function used to create object

//this is constructor funtion
var person = {
    id:1,
    name:"Brendan",
}

// function for create many objects

function Person(id,name){
    this.id =id;
    this.name=name;
}

var eich = new Person(1,"Brendan");
console.log(eich);

var anderssen = new Person (2,"Marc")
console.log(anderssen)

// every function object have companion object called prototype