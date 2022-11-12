interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed" >;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
console.log("Todo ",todo);

type ToDoOmit = Omit<Todo, "completed">;
const omit:ToDoOmit = {
    title : "Title",
    description:"Some desc"
};
console.log("Omit ",omit);