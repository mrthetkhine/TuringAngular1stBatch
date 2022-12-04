function* range(to)
{
    for(let i=0;i<to;i++)
    {
        yield i;
    }
}
let r = range(4);
console.log('R.next ',r.next());
console.log('R.next ',r.next());
console.log('R.next ',r.next());
console.log('R.next ',r.next());
console.log('R.next ',r.next());
for(let i of range(3))
{
    console.log('I ',i);
}