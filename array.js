//array in js is objects

//create array using brackets []

var array = [11,23,36];
console.log(array);

// replace elements
array [2] = 200;
console.log(array);

// add more elements
array[3] = 300;
console.log(array);

// skip elements
array[5]=500;
console.log(array);

// arrays are objects with .length property
console.log(array.length);//6 , lenght+1 
// [ 11, 23, 36 ]
// [ 11, 23, 200 ]
// [ 11, 23, 200, 300 ]
// [ 11, 23, 200, 300, <1 empty item>, 500 ]  


//array can have non numerics index and values
array["boom"] = "yeah";
array[false] = true ;
console.log(array);

// array can have negative index
array[-1]= "Brendan Eich"
console.log(array);//'-1': 'Brendan Eich',

//array can also be assigned using object.property notation
array.hi="Hello";
array["hi"]="hey";// hi: 'hey'
console.log(array);// hi: 'Hello'
console.log(array.length);//6

