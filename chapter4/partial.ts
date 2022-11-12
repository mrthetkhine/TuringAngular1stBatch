interface IAbRequired {
    a: number;
    b: string; 
}
let ab: IAbRequired = {
    a: 1,
    b: "test" 
}
type WeakInterface<T> = {
    [K in keyof T]?: T[K];
}

interface Todo {
    title: string;
    description: string;
}
let todo: Partial<Todo> = {
    title : "Task"
}
console.log("Todo ",todo);