import { IO, Success, Failure, Either, Left, Right } from "funfix";
import fetch from "node-fetch";

interface Todo {
    userId: number;

    id: number;
    title: string;
    completed: boolean;
}
const getTodos = IO.async<Either<Error, Todo[]>>((ec, cb) => {
    fetch(
        "https://jsonplaceholder.typicode.com/todos"
    ).then(response => {
        return response.json().then(
            (json: Todo[]) => cb(Success(Right(json)))
) })
    .catch(err => cb(Failure(Left(err))));
 });

 const logTodos = getTodos.map((either) => {
    return either.map(todos => todos.map(t => console.log(t.title)));
 });
 logTodos.run();