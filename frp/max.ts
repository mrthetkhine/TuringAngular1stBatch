import { from } from "rxjs";
import { max } from "rxjs/operators";
const observable = from([2, 30, 22, 5, 60, 1]); 
const maxObservable = observable.pipe(max());

const subscription = maxObservable.subscribe( 
    (value) => console.log(value)
);
