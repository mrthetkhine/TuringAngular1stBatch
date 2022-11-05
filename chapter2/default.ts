function greet(msg="Hello")
{
    console.log(msg);
}
greet();
greet("Morning")

function max(...rest:number[])
{
    return Math.max(...rest);
}
console.log("Max ",max(1,200,3,-4));
//console.log("Max ",max([1,200,3,-4]));