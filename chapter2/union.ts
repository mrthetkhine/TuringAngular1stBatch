let a : number | string = "Hello";
a = 23;
console.log("A ",a);

function demo(data: number|string)
{
    if(typeof data === 'string')
    {
        console.log("Data touppercase ",data.toUpperCase());
    }
    else
    {
        console.log("Data ", data*3);
    }
    
}
demo("hello");
demo(2);