function NotUndefined(
    target: any,
    propertyKey: string) {
        console.log("Type ",typeof (target));
        console.log('Target ',target, 'name ',propertyKey);
       
}
function methodDec(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor )
    {
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`descriptor : ${JSON.stringify(descriptor)}`);
    console.log(`target[methodName] : ${target[methodName]}`);
}
class Human
{
    @NotUndefined
    name?: string ;
    age? : number = 38;

    @NotUndefined
    static count :number = 23;
    constructor(name?:string,age?:number)
    {
        console.log("Constructor called");
        this.name = name;
        this.age = age;
    }

    @methodDec
    work()
    {
        console.log(`${this.name} work`);
    }
}
let h =new Human('undefined',38);