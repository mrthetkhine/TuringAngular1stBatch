let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];
let [firstIem,...secondItem] = thirdArray;

console.log("Third array ",thirdArray);
console.log("FirstItem ",firstIem, " Remaining ",secondItem);

function getSomething()
{
    return [10,20];
}
let [a,b] = getSomething();
console.log("A ",a , " B ",b);