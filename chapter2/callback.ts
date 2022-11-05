function callback(value:number)
{
    console.log("Process value ",value);
}
type CallBackType = (k:number)=>void;

function getResult(func:CallBackType)
{
    setTimeout(()=>{
        console.log("Now data get it");
        func(200);
    },2000);
    console.log("Return");
};
let k = getResult(callback);
console.log("K is ",k);