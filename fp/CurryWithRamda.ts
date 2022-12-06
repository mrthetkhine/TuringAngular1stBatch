import R from "ramda";

const add = (x:number,y:number)=>x+y;
const addOne = (x:number)=>x+1;
const double = (x:number)=>x*2;

const addTen = R.curry(add)(10);
const printLog = (x:number) => console.log('x is ' + x);
const log = R.tap(printLog);
const newMathFun = R.pipe(
    log,
    addTen,
    log,
    addOne,
    log,
    double);
console.log('NewMath ',newMathFun(2));