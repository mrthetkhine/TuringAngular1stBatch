class Container<T> 
{
    private _value: T;
    public constructor(val: T) {
        this._value = val;
    }
    public map<TMap>(fn: (val: T) => TMap) 
    {
        return new Container<TMap>(fn(this._value));
    } 
  
}

let counter = new Container(1);
let counter2 = counter.map( x => x+1)
                      .map( x => x*x);
console.log("Counter 2 ",counter2)