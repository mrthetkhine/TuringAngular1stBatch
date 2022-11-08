interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
loggingIdentity("Hello");
//loggingIdentity(33);
loggingIdentity([1,2,34]);
loggingIdentity({
    length:123
});