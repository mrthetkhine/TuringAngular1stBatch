"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.func_two = exports.func_one = void 0;
console.log("Another module initalize");
function func_one() {
    console.log("Module func one");
}
exports.func_one = func_one;
function func_two() {
    console.log("Another func two");
}
exports.func_two = func_two;
