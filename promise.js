//Executor is passed 2 functions-resolve and reject

function executor(resolve, reject) {
  if (new Date() % 2)
   resolve("Successful"); // On success call resolve
  else 
   reject("Failed"); //On failure call rejects
}

// promise is an object which calls the executor Synchronously

const pakka = new Promise(executor);
console.log("Promise made");


// .then() / .catch() will be called in Deffered manner
pakka
.then(result=> console.log("then",result)) //if resolve()
.catch(error=>console.log("catch",error));//if rejected()

//this would be done Before .then and .catch
console.log("Program ends")
