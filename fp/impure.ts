let k = 10;
function getData()
{
    return k++;
}
console.log("getData ",getData());

function getNow()
{
    return new Date();
}
console.log("getNow () ",getNow());
console.log("getNow () ",getNow());
function printSomething()
{
    console.log("Hello");
}
printSomething();
function process(k:number)
{
    k = 20;
}