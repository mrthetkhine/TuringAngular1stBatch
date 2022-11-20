"use strict";
class MyBoundClass {
    constructor() {
        this.name = "defaultNameValue";
    }
    printName(index, description) {
        console.log(`this.name : ${this.name}`);
        console.log(`index: ${index}`);
        console.log(`description : ${description}`);
    }
}
let testBoundClass = new MyBoundClass();
//testBoundClass.printName.call({noName:'Test'},"1", "testDescr");
testBoundClass.printName.call({ noName: 'Test' }, 1, "testDescr");
