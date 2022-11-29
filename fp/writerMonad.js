const toUpper = (str)=>[str.toUpperCase(), 'To upper case called'];
const appendHi = (str) =>[str+' ',' appendHi called'];
const compose = (f,g) => (x)=> f(g(x));

let [result,log] = toUpper('hello');
console.log('Result ',result, " log ",log);