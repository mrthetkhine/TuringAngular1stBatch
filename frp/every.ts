import { from } from "rxjs";
import { every,find,filter,max } from "rxjs/operators";
const observable = from([2, 30, 22, 5, 60, 1]); 
const everyObservable = observable.pipe(every(x=>x >0));
const findObservable = observable.pipe(find(x=>x>10)); 
const filterObservable = observable.pipe(filter(x=>x>10)).pipe(max()); 
const subscription = everyObservable.subscribe( 
    (value) => console.log('Every ',value)
);
findObservable.subscribe(
    (value)=> console.log('Find ',value)
);
filterObservable.subscribe(
    (value)=>console.log('Filter max ',value)
);