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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function reflectParameterDec(target, methodName, parameterIndex) {
    let designType = Reflect.getMetadata("design:type", target, methodName);
    console.log(`design type: ${designType.name}`);
    let designParamTypes = Reflect.getMetadata("design:paramtypes", target, methodName);
    for (let paramType of designParamTypes) {
        console.log(`param type : ${paramType.name}`);
    }
    let designReturnType = Reflect.getMetadata("design:returntype", target, methodName);
    console.log(`return types : ${designReturnType.name}`);
}
class ClassWithReflectMetaData {
    print(id, name) {
        return 1000;
    }
}
__decorate([
    __param(0, reflectParameterDec),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Number)
], ClassWithReflectMetaData.prototype, "print", null);
