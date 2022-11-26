const appendHi = (s: string) => s+" hi";//[String->String]
const capitalize = (s: string) => s.toUpperCase();//[String->String]

const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));
const capitalizeAfterAppendHi = compose(capitalize,appendHi);
console.log('Capitalize ',capitalizeAfterAppendHi('good evening'));

const compose2 = <T1, T2, T3>( f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));
const newFunc = compose2(capitalize,appendHi);
console.log('NewFunc ',newFunc('Woo'));

const getWords = (str:string)=> str.split(' ').length; //[String,Number]
const decOne = (num:number)=> num-1; //[Number,Number]

const getWordMinusOne = compose2(decOne,getWords);
console.log('GetWorld minus one ', getWordMinusOne('Hello world how are you'));