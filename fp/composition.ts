const appendHi = (s: string) => s+" hi";//[String->String]
const capitalize = (s: string) => s.toUpperCase();//[String->String]

const appendHiAndCapitalize =(s:string)=> capitalize( appendHi(s));
console.log('Appendhi ',appendHiAndCapitalize('hello'))

type StringToString = (s:string)=>string;
const compose = (f:StringToString,g:StringToString)=> (x:string)=> f(g(x));

/*
compose(f,g)
{
    return function(x)
    {
        return f(g(x))
    }
}
*/ 
let newFunc = compose(capitalize,appendHi);
console.log('New func ',newFunc('morning'));