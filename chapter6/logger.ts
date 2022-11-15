function logger(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor )
    {
    //console.log(`target: ${target}`);
    console.log(`methodName : ${methodName} of ${target} is called`);
    console.log(`descriptor : ${JSON.stringify(descriptor)}`);
    //console.log(`target[methodName] : ${target[methodName]}`);
    if(descriptor)
    {
        descriptor.writable = false;
    }
    let originalFunction = target[methodName];
    let auditFunction = function (this: any) {
        console.log(`1. auditLogDec : overide of `
            + ` ${methodName} called`);
            for (let i = 0; i < arguments.length; i++) {
                console.log(`2. arg : ${i} = ${arguments[i]}`);
            }
        originalFunction.apply(this, arguments);
    }
    
    target[methodName] = auditFunction;
    return target;
}

class Test
{
    @logger
    method(msg: string)
    {
        console.log('This is method ',msg);
    }
}
let h =new Test();
/*
h.method = function()
{
    console.log('Soemthing else');
};
*/
h.method('Hello');
