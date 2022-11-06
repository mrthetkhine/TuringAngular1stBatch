class Base {
  greet() {
    console.log("Hello, world!");
    this.something();
  }
  something()
  {
    console.log("Basse something");
  }
}
 
class Derived extends Base {
  greet(name?: string) {
    console.log("Derived greet");
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
  something()
  {
    console.log("Derived something");
  }
  
}
let b = new Derived();
b.greet();