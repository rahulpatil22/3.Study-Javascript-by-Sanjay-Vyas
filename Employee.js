function Employee(id,name){
    this.id =id;
    this.name= name;
    
    //Dont Do this
    this.print = function(){
        console.log(this.id,this.name); // it will be wastage of memory
    }
// dont put a function inside this. object , otherwise it will go to every object
}
Employee.count = 1; //goes to function object
Employee.prototype.printDetails = function(){ //goes to prototype object
    console.log(this.id,this.name);
}
var eich = new Employee(1,"Brendan");
console.log(eich);
eich.printDetails(); //Prototype chaining
console.log(eich.toString());//prototype chaining -grandfather
// console.log(eich.doMissing());
console.log(eich.count);//undefined
console.log(Employee.count); //1
eich.print();

