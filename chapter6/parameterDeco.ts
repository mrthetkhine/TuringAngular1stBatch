function parameterDec(target: any,
    methodName: string,
    parameterIndex: number) {
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`parameterIndex : ${parameterIndex}`);
}

class ClassWithParamDec {
    name = 'Something';
    print(@parameterDec value: string) {
    }
}
