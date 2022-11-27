const pipe = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => g(f(x));

const appendHi = (s: string) => s+" hi";//[String->String]
const capitalize = (s: string) => s.toUpperCase();//[String->String]

const appendHiAndCapitalize = pipe(appendHi,capitalize);
console.log('appendHiAndCapitalize ',appendHiAndCapitalize('hello '));