"use strict";
var _A_amount;
class A {
    constructor() {
        this.x = 10;
        _A_amount.set(this, 200);
    }
    sameAs(other) {
        // No error
        return other.x === this.x;
    }
}
_A_amount = new WeakMap();
let a = new A();
console.log(`A.x `, a['x']);
//console.log(`A.amount `, a['amount']);
