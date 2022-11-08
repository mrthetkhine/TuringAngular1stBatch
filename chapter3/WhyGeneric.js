"use strict";
class NonGenStack {
    constructor() {
        this.items = [];
    }
}
class GenStack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
}
let numStack = new GenStack();
numStack.push(10);
//numStack.push("100");
let strStack = new GenStack();
strStack.push("Hello");
strStack.push("One");
console.log("Pop ", strStack.pop());
console.log("Pop ", strStack.pop());
