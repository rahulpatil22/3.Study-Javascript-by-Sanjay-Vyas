function sqr(x){      //regular function
    return x * x ;
}
console.log(sqr(5));//25

          function sqr(x) {return x * x;}  //function declaration
var sqr = function    (x) {return x * x;}  //function expression

var sqr =             (x) =>{return x * x;} // arrow function/lambda
var sqr =              x => {return x * x;} //single(param),remove()
var sqr =              x =>         x * x;  //Single return , remove {return}
