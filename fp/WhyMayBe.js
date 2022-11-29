const toUpper= (str) => str.toUpperCase();
const appendHi = (str) => str+" Hi";

const compose = (f,g) => (x)=> f(g(x));
const appendHiAndToUpper = compose(appendHi, toUpper);

console.log('AppendHiandToupper ',appendHiAndToUpper(undefined));