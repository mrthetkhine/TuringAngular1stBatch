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
class MayBe<T> {
    public static of<TVal>(val?: TVal) {
        return new MayBe(val);
    }
    private _value!: T;
    public constructor(val?: T) {
        if (val) {
            this._value = val;
        }
    }
    public isNothing() {
        return (this._value === null || this._value === undefined);
    }
    public map<TMap>(fn: (val: T) => TMap) {
        if (this.isNothing()) {
            return new MayBe<TMap>();
        } else {
            return new MayBe<TMap>(fn(this._value));
        }
    }
    public ap<TMap>(c: MayBe<(val: T) => TMap>) {
        return c.map(fn => this.map(fn));
    }
    public join() {
        return this.isNothing() ? Nothing.of(this._value) : this._value;
    }
    public chain<TMap>(fn: (val: T) => TMap) {
        return this.map(fn).join();
    }
    public orElse(v:T)
    {
        if(this.isNothing())
        {
            return v;
        }
        else
        {
            return this._value;
        }
    }
}
//map
// single -> single
//a->b
/**
 * 
 * // chain -
// a->M[b] => [a]=>[b]
 * 
 */

//normal function
const addOne = (x:number) => x+1;
const monadicAddOne = (x:number) => MayBe.of(x+1);
const double = (x:number) =>x*2;
let result = MayBe.of(3)
                  .map(double) 
                  //.join();
                  .chain(monadicAddOne);//MayBe(MayBe(4))
console.log(`Result `,result);