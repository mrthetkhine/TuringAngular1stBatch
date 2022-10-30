let a = 10;
a *= 20;
console.log("A is ",a);

let data :any = "Hello";
data = 5/2;
console.log('Data ',data);

let arr = [10,20,100,30,50];
/*
let max = arr[0];
for(let i=0;i<arr.length;i++)
{
    if(max < arr[i])
    {
        max = arr[i];
    }
}*/
let max = Math.max(... arr);
console.log("Max ",max);