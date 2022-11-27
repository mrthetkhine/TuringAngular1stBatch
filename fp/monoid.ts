interface monoid<T> {
    empty: T;
    op: (u: T, v: T) => T
}
const Sum: monoid<number> = ({
    empty: 0,
    op: (u: number, v: number) => u + v
});
var total:number = Sum.op(Sum.empty, Sum.op(3, 4));
console.log('Total ',total);
let arr = [1,2,3,4,5];

total = arr.reduce(Sum.op,Sum.empty);
console.log('Total ',total);

function fold<T>(list: Array<T>, acumulate: T, concat: (u: T, v: T) => T): T {
    list.forEach(item => {
      acumulate = concat(acumulate, item);
    });
    return acumulate;
}
var sum = fold([2, 3, 4], Sum.empty, Sum.op);
console.log('Sum ',sum);
var min = fold([12, -13, 24], Infinity, (x, y) => x < y?x:y);
console.log('Min ',min);