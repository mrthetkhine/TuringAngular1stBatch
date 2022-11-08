function identity<Type>(arg: Type): Type {
    return arg;
}
let k = identity<number>(200);
console.log("K is ",k);

function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
}
loggingIdentity([1,2,3]);