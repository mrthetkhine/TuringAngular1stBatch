function* iterateOnMultiples(arr: number[], divisor: number) {
    for (let item of arr) {
        if (item % divisor === 0) {
            yield item;
        }
    }
}
let arr = [1,2,3,8,9,15];
for(let multipleOf3 of iterateOnMultiples(arr,3))
{
    console.log("Item ",multipleOf3);
}