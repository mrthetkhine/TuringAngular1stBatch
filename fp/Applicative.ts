class Container<T> {
       public static of<TVal>(val: TVal) 
       {
           return new Container(val);   
        }
       private _value!: T;

       public constructor(val: T) 
       {
           this._value = val;   
       }
       public map<TMap>(fn: (val: T) => TMap) 
       {
           return new Container<TMap>(fn(this._value));
        }
       public ap<TMap>(c: Container<(val: T) => TMap>) 
       {
           return c.map(fn => this.map(fn));
       } 
}
const double = (x: number) => x * 2 ;
const numberContainer = Container.of(3);
const functionContainer = Container.of(double);
let result = numberContainer.ap(functionContainer);
console.log("Result ",result);