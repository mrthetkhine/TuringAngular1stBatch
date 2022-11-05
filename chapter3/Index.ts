class MyClass {
  [s: string]: boolean | ((s: string) => boolean);
 
  check(s: string) {
    return this[s] as boolean;
  }
}

let data = new MyClass();
console.log("Data is ",data["1"]);