"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(constructor) {
    console.log('Class', constructor.name, " loaded");
}
function ZeroArgumentDecorator(constructor) {
    console.log('simpleDecorator called ', constructor.length);
    if (constructor.length != 0) {
        throw new Error("Constructructor should be zero");
    }
}
let ClassWithSimpleDecorator = class ClassWithSimpleDecorator {
    method() {
        console.log("Method called");
    }
};
ClassWithSimpleDecorator = __decorate([
    ZeroArgumentDecorator,
    Log
], ClassWithSimpleDecorator);
let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();
instance_1.method();
