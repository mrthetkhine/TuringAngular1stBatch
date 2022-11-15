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
function NotUndefined(target, propertyKey) {
    console.log("Type ", typeof (target));
    console.log('Target ', target, 'name ', propertyKey);
}
function methodDec(target, methodName, descriptor) {
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`descriptor : ${JSON.stringify(descriptor)}`);
    console.log(`target[methodName] : ${target[methodName]}`);
}
class Human {
    constructor(name, age) {
        this.age = 38;
        console.log("Constructor called");
        this.name = name;
        this.age = age;
    }
    work() {
        console.log(`${this.name} work`);
    }
}
Human.count = 23;
__decorate([
    NotUndefined,
    __metadata("design:type", String)
], Human.prototype, "name", void 0);
__decorate([
    methodDec,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Human.prototype, "work", null);
__decorate([
    NotUndefined,
    __metadata("design:type", Number)
], Human, "count", void 0);
let h = new Human('undefined', 38);
