// closure

// some langauges allow functions inside function (inner functions)
//Javascript , dart ,python,kotlin,Rust,Scala,C#

// some langauges allow classes inside classes (inner classes)
//Java , c++ , Python

//javscript does not allow classes inisde classes

function outer(){
    //local varible of outer
    var outerVar = 5; // its define outside to the inner function , its not belong to same and should not be accessible
    console.log("outer", outerVar);

    function inner(){
        //using variable from outer scope
        //will be captured in closure
        var innerVar = 10;
        console.log("inner",innerVar,outerVar)
    }
    // inner();// get called

    //all local vars of outer will be destroyed here ex:outerVar
    return inner;
}

// we get reference to inner function
var captureInner=outer(); //get called
console.log(captureInner);
//which we call and outerVar is in the closure
captureInner(); //[Function: inner],inner 10 5

//closure is place , where it stores the duplicate references to an outer variable

// closure is an object attached to inner function,when js is realise that , inner function is uses something that does not belongs to it
// and what it does its capture the inner function variable ex: outerVar and store it in that closure



// inner();// not get called, err:inner is not defined, then called it inside
// javascript allowed , function inside function there visibility is within the function and they can be called only within the function