// Type your code here
let hour = new Date().getHours();
if (hour >= 7 && hour <= 12) {
    console.log(`\n Good morning, it's ${hour} hours`); 
} else if(hour >= 13  && hour < 22) {
    console.log(`\n Good afternoon, it's ${hour} hours`); 
} else if (hour <= 6 && hour <= 22){
    console.log(`\n Good night, it's ${hour} hours`);
}
let pi = Math.PI.toFixed(6);
console.log(`\n El numero PI es: ${pi} \n`);
let decimal = 20;
for (let i = 0; i <= decimal; i++) {
    console.log(`${i} dec = ${i.toString([16])} hex = ${i.toString([8])} oct = ${i.toString([2])} bin`);
}
console.log();
let decimal2 = 20;
for (let i = 0; i <= decimal2; i++) {
    if(i % 2 !== 0 && i > 10){
        console.log(`${i} dec = ${i.toString([16])} hex = ${i.toString([8])} oct = ${i.toString([2])} bin`);        
    }else{
        continue; 
    }  
}
console.log("\n Hi in Chinese is written as: \u55e8\uff0c\u4f60\u597d\u5417 ");
console.log("\n The program has finished");