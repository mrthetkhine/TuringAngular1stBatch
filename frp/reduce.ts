import { from } from "rxjs";
import { reduce,find,filter,max } from "rxjs/operators";
const observable = from([2, 30, 22, 5, 60, 1]); 

const reduceObservable = observable.pipe(reduce((x, y) => x + y));
const subscription = reduceObservable.subscribe( 
    (value) => console.log(value)
);
