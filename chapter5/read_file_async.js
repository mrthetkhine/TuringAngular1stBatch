const fs = require('fs');

console.log("Before read file");
const start = new Date();
const promise1 = fs.promises.readFile('hello.txt');
const promise2 =  fs.promises.readFile('hello2.txt');

Promise.all([promise1,promise2]).then(data=>{
    const endTime = new Date();
    const elapsedTime = endTime-start;
    console.log("Execution time ",elapsedTime);
    console.log("Data ",data.length);
});
console.log("After read file");