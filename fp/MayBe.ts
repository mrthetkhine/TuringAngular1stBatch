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

const appendHi = (s: any) => s + " hi";//[String->String]
const capitalize = (s: any) => s.toUpperCase();//[String->String]
const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));

let data = 'hello';
const result = MayBe.of(data)
    .map(appendHi)
    .map(capitalize)
    .orElse('Default string');
console.log('Result ', result);

