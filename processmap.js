g=10; //global variable
var x= 5; //local to anonymous function
var y=7;//local to anonymous function

function add(a,b){
    var c; //local to add function
    c=a + b;
    return c;
}
var z = add(x,y);
console.log("z",z)