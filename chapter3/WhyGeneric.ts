class NonGenStack
{
    items :Array<number> = [];
}
class GenStack<Type> 
{
    items: Array<Type> = [];

    push(element:Type)
    {
        this.items.push(element);
    }
    pop()
    {
        return this.items.pop();
    }
}
let numStack = new GenStack<number>();
numStack.push(10);
//numStack.push("100");

let strStack = new GenStack<string>();
strStack.push("Hello");
strStack.push("One");

console.log("Pop ",strStack.pop());
console.log("Pop ",strStack.pop());