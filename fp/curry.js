const compose = (f,g) => (x)=> f(g(x));
const double = (x)=>x * 2;
/*
function add(a)
{
    return function(b)
    {
        return a+b;
    }
}
*/
const add = (a)=>(b)=>a+b;
let addOne = add(1);
console.log('AddOne 3 ',addOne(3));
console.log('AddOne 5 ',addOne(5));
let newFun = compose( addOne, double );
console.log("NewFunc ",newFun(3));