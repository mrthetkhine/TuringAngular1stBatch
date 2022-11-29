type Either<T1, T2> = Just<T1> | Nothing<T2>;
class Nothing<T> {
    public static of<TVal>(val?: TVal) {
        return new Nothing(val);
    }
    private _value: T | undefined;
    public constructor(val?: T) {
        this._value = val;
    }
    public map<TMap>(fn: (val: T) => TMap) {
        return new Nothing<TMap>(this._value as any);
    }
}
class Just<T> {
    public static of<TVal>(val: TVal) {
        return new Just(val);
    }
    private _value: T;
    public constructor(val: T) {
        this._value = val;
    }
    public map<TMap>(fn: (val: T) => TMap) {
        return new Just<TMap>(fn(this._value));
    }

}
function div(a:number,b:number):Either<any,any>
{
    if(a==0 && b==0)
    {
        return Nothing.of("A and b is zero");
    }
    else
    {
        return Just.of(a/b);
    }
}

const addOne = (x:number)=> x+ 4;
let result = div(0,0)
    .map(addOne)
    .map(x=>console.log(x));
console.log('Result ',result)