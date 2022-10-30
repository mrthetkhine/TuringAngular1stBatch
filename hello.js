var a = 10;
a *= 20;
console.log("A is ", a);
var data = "Hello";
data = 5 / 2;
console.log('Data ', data);
var arr = [10, 20, 100, 30, 50];
/*
let max = arr[0];
for(let i=0;i<arr.length;i++)
{
    if(max < arr[i])
    {
        max = arr[i];
    }
}*/
var max = Math.max.apply(Math, arr);
console.log("Max ", max);
