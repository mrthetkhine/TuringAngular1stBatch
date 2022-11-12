type OurFunType = (a:number,b:string) => string
type Parameter1 = Parameters<OurFunType>;
let tuple : Parameter1 = [1,"Hello"];
console.log('Tuple ',tuple);

type RetType = ReturnType<OurFunType>;
let str : RetType = "3";
console.log("Str ",str);