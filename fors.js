var array = [11, 23, 36];
array[5] = 500;// index 5 value 500  , index=key
array["boom"] = "yeah";
array[-1] = 5;
console.log("array", array);
console.log(); // 11,23,36
//array [ 11, 23, 36, <2 empty items>, 500,boom: 'yeah' ,'-1': 5]

//for loop
console.log("for");
for (var index = 0; index < array.length; index++)
  console.log(index, array[index]);
console.log();
// 0 11
// 1 23
// 2 36

// for        
// 0 11       
// 1 23       
// 2 36       
// 3 undefined
// 4 undefined
// 5 500

//for IN(INdex) give me index one by one, giving same for loop
console.log("for in");
for (var index in array) console.log(index, array[index]);
console.log();
// 0 11
// 1 23
// 2 36

// for in
// 0 11
// 1 23
// 2 36
// 5 500
// boom yeah
// -1 5

//for of (value OF)
console.log("for of");
for (var value of array) console.log(value);
console.log();
//  11
//  23
//  36

// for of
// 11
// 23
// 36
// undefined
// undefined
// 500

//for each (value OF)
console.log("for Each");
array.forEach((ele) => console.log(ele));
console.log();
//for each is HOF(higher order function),which takes function/lamda,which called passing each element
//  11
//  23
//  36

// for Each
// 11
// 23
// 36
// 500
