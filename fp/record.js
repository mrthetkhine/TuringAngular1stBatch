const { Record } = require('immutable')
const ABRecord = Record({ a: 1, b: 2 })
let myRecord = ABRecord({ b: 3 })
console.log(myRecord.get('a')) // 1
console.log(myRecord.get('b')) // 3


const myRecordWithoutB = myRecord.remove('b')
console.log('myRecordWithoutB.get("b")', myRecordWithoutB.get('b')); 
//console.log('myRecord ',myRecord);

myRecord = ABRecord({ b: 3, x: 10 })
console.log('x ',myRecord.get('x')); // undefined