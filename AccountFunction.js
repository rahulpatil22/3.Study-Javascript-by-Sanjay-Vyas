// Javascript is not traditional class based OOP language, Javascript Has Prototype based OOP language

//constructor function(should be called with new)

function Account(an,hn,bal){

    // FIELDS(properties)
    this.accountNumber = an;
    this.holdersName = hn ;
    this.balance = bal ;
}

//Methods
Account.prototype.deposit = function(amount){
    this.balance += amount;
}

Account.prototype.withdraw = function(amount){
    this.balance -= amount;
}


//object instantiation
var eich = new Account(1,"Brendan",1000);
eich.deposit(1000);
eich.withdraw(500);
console.log(eich);
console.log("function", typeof Account)//function function