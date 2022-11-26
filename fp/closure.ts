function nextId()
{
    let counter = 0;
    return function inner()
    {
        return counter++;
    }
}
let next = nextId();
console.log("Next ",next());
console.log("Next ",next());
console.log("Next ",next());

function Stack()
{
    let items:Array<number> = [];
    function push(element:number)
    {
        items.push(element);
    }
    function pop()
    {
        return items.pop();
    }
    return{
        push,
        pop
    }
}
let stack1 = Stack();
stack1.push(100);
console.log('Pop ',stack1.pop());