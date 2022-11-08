"use strict";
class MyClass {
    check(s) {
        return this[s];
    }
}
let data = new MyClass();
console.log("Data is ", data["1"]);
