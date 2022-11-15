"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logger(target, methodName, descriptor) {
    //console.log(`target: ${target}`);
    console.log(`methodName : ${methodName} of ${target} is called`);
    console.log(`descriptor : ${JSON.stringify(descriptor)}`);
    //console.log(`target[methodName] : ${target[methodName]}`);
    if (descriptor) {
        descriptor.writable = false;
    }
    let originalFunction = target[methodName];
    let auditFunction = function () {
        console.log(`1. auditLogDec : overide of `
            + ` ${methodName} called`);
        for (let i = 0; i < arguments.length; i++) {
            console.log(`2. arg : ${i} = ${arguments[i]}`);
        }
        originalFunction.apply(this, arguments);
    };
    target[methodName] = auditFunction;
    return target;
}
class Test {
    method(msg) {
        console.log('This is method ', msg);
    }
}
__decorate([
    logger,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Test.prototype, "method", null);
let h = new Test();
/*
h.method = function()
{
    console.log('Soemthing else');
};
*/
h.method('Hello');
