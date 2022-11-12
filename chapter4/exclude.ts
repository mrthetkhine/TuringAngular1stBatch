interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }
 
type ToDoExclude = Exclude<Todo,"completed">;
type T0 = Exclude<"a" | "b" | "c", "a">;

let t0:T0 = "b";
console.log("T0 ",t0);
let todo: ToDoExclude = {
    title : "S",
    description: "D",
    completed: false,
}