var array = [11,23,36];
console.log("array", array);

// Higher order function :- a function which takes function as parameter , a function which returns function


//Passing External function to HOF
console.log("Pass external function");

    // array ->  [11,23,36]- printElement


array.forEach(printElement);  //passes printElement function as parameter,forEach is HOF

function printElement(element){
    console.log(element)
}

//Pass function directly as parameter
console.log("Pass function as parameter");
array.forEach(function(element){console.log(element);});


//pass fat arrow function as parameter
console.log("Pass fat arrow as parameter");
array.forEach(element => console.log(element));

//array has variety of Higher order functions

//find out if all elements pass the condition
console.log("every element is > 10",array.every(elem=> elem > 10));

//find out if some elements pass the condition
console.log("some elements > 30" , array.some(elem => elem > 30));

//find the first element passing the condition
console.log("first element > 20",array.find(elem => elem > 20));// its stop finding after first element ,not goes on second

//find all elements which are odd
console.log("odd elements",array.filter(elem => elem%2==1));

//Map-transform elements of an array into new array

//double every element in the array
var doubleArray = array.map ( elem => elem * 2);
console.log("doubleArray",doubleArray);

// transform language array into objects
var languages = ["Java","Javascript","Python"];
var obj = languages.map( lang => ({ language:lang,length:lang.length}));//obj with two prop=langauge and length
console.log("obj",obj)

//Reduce all elements of an array to a single value

//sum all elements of an array
//array = [11,23,36]

var sum = array.reduce((accumulator,elem) => accumulator + elem);
                        //  11   ,    23 =>      11 + 23         =34
                        //  34    ,   36 =>      34 + 36         =70

console.log("sum",sum);//70


// reduce can take an initial value for accumulator
var expenses = [                              //in  array, three objects, and those are three parameters
    {txn: 1,desc:"swiggy",amount:250},
    {txn: 2,desc:"uber",amount:800},
    {txn: 3,desc:"amazone",amount:1400},
];
console.log("expense",expenses)
// dont take object as accumulator , its converts into string and print string

//doesnt work as it tries to add entire object and not amounts
var sum = expenses.reduce ((accumulator,exp)=> accumulator+exp.amount);
console.log("sum",sum); //sum [object Object]8001400
// when js add object it converts into a string

//pass initial value of 0, so it doesnt try to add objects
var sum = expenses.reduce((accumulator,exp)=>accumulator+exp.amount,0);// dont take object as accumulator , take 0 as accumulator
console.log("sum",sum)
