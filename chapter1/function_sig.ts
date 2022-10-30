function greet(msg:string)
{
    console.log("Hello ",msg);
}
greet("TK");
//greet(3);

function add(a:number,b :number):number
{
    return a+b;
}
let c = add(1,2);
console.log("C ",c);
//c = "Hello";

const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
  
});