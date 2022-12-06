import { from } from "rxjs";
import { merge,zip } from "rxjs/operators";
const observableA = from([20, 40, 60, 80, 100]);
const observableB = from([1, 1]);
const observableC = observableA.pipe(merge(observableB));
const subscription = observableC.subscribe(
    (value) => console.log(value)
);
//subscription.unsubscribe();

const obA = from([1, 2, 3, 3, 4, 5]); 
const obB = from(["A", "B", "C", "D"]);
const obC = obA.pipe(zip(obB));
obC.subscribe( 
    (value) => console.log(value)
);
