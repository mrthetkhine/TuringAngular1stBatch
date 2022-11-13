const fs = require('fs');


console.log("Before read file");
const start = new Date();
let data = fs.readFileSync('hello.txt');
let data2 = fs.readFileSync('hello2.txt');
const endTime = new Date();
const elapsedTime = endTime-start;
console.log("Execution time ",elapsedTime);
console.log("After read file ",data.toString().length+ data2.toString().length);
