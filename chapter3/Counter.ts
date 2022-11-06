console.log("PreFirst");
class Counter
{
    //static name = "S!";
    x : number = 10;
    static noOfInstance  = 0;
    static{
        console.log("Block 1");
    }
    constructor()
    {
        Counter.noOfInstance ++;
    }
    inc()
    {
        this.x ++;
        console.log("Counter.noOfInstance ",Counter.noOfInstance);
    }
    static method()
    {
        console.log("Class ",Counter.noOfInstance);
       // this.x ++;
    }
    static{
        console.log("Block 2");
    }
}
console.log("First");
class Base {
    static getGreeting() {
      return "Hello world";
    }
  }
class Derived extends Base {
    myGreeting = Derived.getGreeting();
}
let c1 = new Counter();
let c2 = new Counter();

c1.inc();
console.log("C1 ",c1.x);

c2.inc();
console.log("C1 ",c2.x);
console.log("Counter ",Counter.noOfInstance);