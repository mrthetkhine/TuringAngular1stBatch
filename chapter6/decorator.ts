function Log(constructor:Function)
{
    console.log('Class',constructor.name, " loaded");
}
function ZeroArgumentDecorator(constructor: Function) {
    console.log('simpleDecorator called ',constructor.length);
    if(constructor.length != 0)
    {
        throw new Error("Constructructor should be zero");
    }

}


@ZeroArgumentDecorator
@Log
class ClassWithSimpleDecorator 
{
   
    method()
    {
        console.log("Method called");
    }
}
let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();
instance_1.method();