interface Animal {
  live(): void;
}
interface Dog /*extends Animal*/ {
  woof(): void;
}
 
type Example1 = Dog extends Animal ? number : string;
let str: Example1 = "Hello";