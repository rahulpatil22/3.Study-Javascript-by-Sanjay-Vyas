let count = 0;

while(count < 5 ){
 console.log("Loop",count); //0 1 2 3 4
 count++;  
}

let sum = 0;
let num = 1 ;
while (num <= 100)
 sum += num++;
console.log("sum",sum); //5050


count = 0;
do {
    console.log("Loop",count);
    count++;
} while(count < 5);