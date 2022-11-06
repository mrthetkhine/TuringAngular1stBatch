abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
class Derived extends Base
{
    getName()
    {
        return "Derived";
    }
}
let obj = new Derived();
console.log("Obj ",obj.getName());

function greet(ctor: new () => Base) {
    const instance = new ctor();
    instance.printName();
}
greet(Derived);
//greet(Base);