//function at top
'use strict';
function add (a,b){ 
    console.log("add",this) // points global
    this.id = 123 // points global - to avoid this js come with use strict
    return a + b;
}


// outer functions points to the global
//function inside object
var person = {
    id: 1,
    name: "Brendan",
    print:function (){ //function inside object
        console.log("person",this); //this print entire object,
    }// this points to the function inside an object to points to that object otherwise, global
}
console.log(add(5,7));
person.print();

// 12
// person { id: 1, name: 'Brendan', print: [Function: print] }