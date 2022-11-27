const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));

//add(1,2)
function curry2<T1, T2, T3>(fn: (a: T1, b: T2) => T3) 
{ 
    return (a: T1) => (b: T2) => fn(a, b);
}
const double = (x:number)=>x * 2;
const add = (a:number,b:number) => a + b;
const curriedAdd = curry2(add);
console.log("Curried Add ",curriedAdd(1)(3));

const addOne = curriedAdd(1);
const newFunc = compose( double,addOne);
console.log('NewFunc ',newFunc(10));

function curry3<T1, T2, T3, T4>(fn: (a: T1, b: T2, c: T3) => T4) {
    return (a: T1) => (b: T2) => (c: T3) => fn(a, b, c);
}
const display = (a:string,b:string,c:string)=>{
    console.log('A ',a, ' b ',b, ' c ',c);
    return a+b+c;
}
let curriedDisplay = curry3(display);
console.log('Curried Display ',curriedDisplay('First')('Second')('Third'));