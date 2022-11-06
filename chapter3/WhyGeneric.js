var NonGenStack = /** @class */ (function () {
    function NonGenStack() {
        this.items = [];
    }
    return NonGenStack;
}());
var GenStack = /** @class */ (function () {
    function GenStack() {
        this.items = [];
    }
    GenStack.prototype.push = function (element) {
        this.items.push(element);
    };
    GenStack.prototype.pop = function () {
        return this.items.pop();
    };
    return GenStack;
}());
var numStack = new GenStack();
numStack.push(10);
//numStack.push("100");
var strStack = new GenStack();
strStack.push("Hello");
strStack.push("One");
console.log("Pop ", strStack.pop());
console.log("Pop ", strStack.pop());
