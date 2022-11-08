"use strict";
var _Circle_privateData;
class Circle {
    constructor(radius) {
        _Circle_privateData.set(this, '');
        this._radius = radius;
    }
    set radius(newRadius) {
        console.log("Setter ", newRadius);
        if (newRadius > 0) {
            this._radius = newRadius;
        }
    }
    get area() {
        console.log("getter");
        return Math.PI * this._radius * this._radius;
    }
}
_Circle_privateData = new WeakMap();
let circle = new Circle(3);
//circle._radius = 0;
//circle.#privateData = "Hello";
circle.radius = 100;
console.log("Circle ", circle.area);
