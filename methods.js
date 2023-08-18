//array methods
// adding array to back +1 - push method
//remove array from back -1 -pop method

// +1 add array to front - unshift
// -1 remove array from front - shift

var array = [11,23,36];
console.log("array",array); //array [ 11, 23, 36 ]

// add elements to the end(push)
array.push(48);
console.log("push(48)",array);//push(48) [ 11, 23, 36, 48 ]

// add elements to the beginning(unshift)
array.unshift(5);
console.log("unshift(5)",array);//unshift(5) [ 5, 11, 23, 36, 48 ]

// remove elements from the end(pop)
array.pop();
console.log("pop()",array);//pop() [ 5, 11, 23, 36 ]

// remove elements from the beginning(shift)
array.shift();
console.log("shift()",array);//shift() [ 11, 23, 36 ]

//remove any or multiple elements(splice)
array.splice(1,1);//(start point,how many)
console.log("splice()",array);//splice() [ 11, 36 ]

