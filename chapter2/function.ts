function add(a:number,b:number):number
{
    return a+b;
}
type BinaryFun = (a:number,b:number)=>number;
let binary: BinaryFun = add;
console.log("Binary ",binary(1,2));