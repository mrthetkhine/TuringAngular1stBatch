import { of,from,interval } from "rxjs";
const observable = of(1);

const subscription = observable.subscribe(
    (value) => console.log(value),
    (error: any) => console.log(error),
    () => console.log("Done!")
);
observable.subscribe((value)=>console.log('Second subscriber ',value));
subscription.unsubscribe();

const arrayObservable = from([10,20,30]);
arrayObservable.subscribe((value)=>console.log('Array subscriber ',value));

const intervalObservable = interval(1000);
intervalObservable.subscribe((value)=>console.log('intervalObservable subscriber ',value));