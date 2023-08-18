function Employee(id,name){  //constructor function
    // this means the object being created
    this.id = id;
    this.name = name;

    // regular functions this always points to global
    function printf(){      //regular function
        console.log(this.id)
    }


      printl =()=> {  // arrow function /lambda .lambda does not point out global, it point to outside the lexical scope / in constructor function
     console.log(this.id);
     }


    printf();//undefined
    printl();//1
}



var eich = new Employee(1,"Brendan") //create an object of type employee ,with new constructor get called
console.log(eich);