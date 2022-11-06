class MyClass {
  name = "MyClass";
  getName() {
    console.log("Get name ");
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};

// Prints "obj", not "MyClass"
console.log(obj.getName());
let method = obj.getName;
console.log("Method ",method());