"use strict";
const someClass = class {
    constructor(value) {
        this.content = value;
    }
};
const m = new someClass("Hello, world");
console.log("M ", m);
