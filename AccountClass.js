// ES6 Class

class Account {
      
    //private fields
      #accountNumber;
      #holdersName;
      #balance
  

    //constructor inside class
    constructor(an,hn,bal){

        // FIELDS(properties),fields to be private using #
    this.accountNumber = an;
    this.holdersName = hn ;
    this.balance = bal ;

    }

    //Methods also Inside the class(automatically prototype)
    deposite(amount){
        this.balance += amount;
    }
    withdraw(amount){
        console.log("Account Withdraw")
        this.balance -= amount;
    }
    // G E T T E R,its look like function,but it is not
    // look like a field but run like a method
    // which is not only return , its assign also to internal property
    
    get accountBalance() {return this.balance}
}

//Inheritance,
// override withdraw method ,means instead of calling above withdraw ,call this withdraw
class SavingAccount extends Account{
    withdraw(amount){
       if(this.balance-amount<500)
       throw new Error("Insuficient Balance");
    super.withdraw(amount)// call above withdraw instead of this
    }
}


//instantiate Object
var andreessen = new SavingAccount(2,"Marc",2000);
andreessen.deposite(5000);
andreessen.withdraw(1000);
console.log(andreessen);
console.log(andreessen.accountBalance)//6000
console.log("class",typeof Account);//class function


// internally there is no class in Javascript