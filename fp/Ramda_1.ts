import R from "ramda";

const toUpper = (str:string)=>str.toUpperCase();
const appendHi = (str:string)=>str+' hi';
const appendHiAndToUpper = R.compose(toUpper,appendHi);

const newVersion = R.pipe(appendHi,toUpper);

console.log('appendHiAndToUpper ',appendHiAndToUpper('hello'));
console.log('newVersion ',newVersion('morning'));