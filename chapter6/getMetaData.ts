import 'reflect-metadata';

function reflectParameterDec(target: any,
    methodName: string,
    parameterIndex: number)
{
let designType = Reflect.getMetadata(
    "design:type", target, methodName);
console.log(`design type: ${designType.name}`)
let designParamTypes = Reflect.getMetadata(
    "design:paramtypes", target, methodName);
for (let paramType of designParamTypes) {
    console.log(`param type : ${paramType.name}`);
}
    let designReturnType = Reflect.getMetadata(
        "design:returntype", target, methodName);
    console.log(`return types : ${designReturnType.name}`);
}

class ClassWithReflectMetaData {
    print(
        @reflectParameterDec
        id: number,
        name: string
    ): number
    {
        return 1000;
} }