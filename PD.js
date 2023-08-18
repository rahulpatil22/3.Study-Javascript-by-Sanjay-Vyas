// property descriptors
//if want to protect our property,do not want others to change js provide-Object.defineProperties and Object.defineProperty

function Person(id,name){
    // this.id=id;
    this.name=name;

    // creating property descriptors
Object.defineProperty( this,"id",
{value:id,writable:false ,enumerable:true,configurable:true}
);
}

var eich = new Person(1,"Brendan");
console.log(eich);
Object.defineProperty( eich,"id",
{value:5,writable:true ,enumerable:true,configurable:true}
);


eich.id=5;
console.log(eich);
console.log(eich.id);