//closure


//outer function
function zoo(){

//local variables of zoo function
var tiger = "zinda hai";
var lion = "zaroor marega";

//inner function
function cage(){
    //tiger is not a varible of cage function
    console.log("tiger",tiger) ;
}

// at this point all local variables of zoo are destroyed
return cage;
}

// call zoo to obtained cage
var pinjara = zoo();
//we are calling cage but local var of zoo are destroyed
pinjara();// tiger zinda hai