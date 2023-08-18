// functions are defined in mathematics
// fn(value)->val x val x val x

// functions in programming langauges

function cube (val){
    return val * val * val;
}

total =0;
// impure functions- uses and modifies data outside

function accumulate(num){

    //modifying external variable

    total+= num;
    return total;
}
console.log(accumulate(5));

//pure function- does not use/modify outside data

function accumulate(total,value){
    return total + value;
}
var total = 0;
console.log(accumulate(total,5));
console.log(accumulate(total,7));
console.log(accumulate(total,1));

//Higher order functions- pass functions to another functions as input or return functions

const expenses=[
    {txn: 1, desc:"zomato",amount:350},
    {txn: 2, desc:"amazon",amount:2100},
    {txn: 3, desc:"uber",amount:450}
];
// reduce is HoF
const sum = expenses.reduce((total,exp)=>accumulate(total,exp.amount),0); // take accumulate function as input with two para
console.log("sum",sum);//2900

// Lambda(fat arrow function)

//reg expression
function sqr(x){
 return x * x;
}

var sqr=(x)=>{return x * x} // Lmbda expression
var sqr=x=> x * x; // for single statement,look like mathmatical expression
console.log("sqr(5)=", sqr(5));//25