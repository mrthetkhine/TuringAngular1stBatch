class Pair<TypeA,TypeB>
{
    a:TypeA;
    b:TypeB;
    constructor(a:TypeA,b:TypeB)
    {
        this.a = a;
        this.b = b;
    }

    get first():TypeA
    {
        return this.a;
    }
    get second():TypeB
    {
        return this.b;
    }
}
let my_tuple = new Pair<number,string>(12,"Hello");
let first = my_tuple.first;
let second = my_tuple.second;
console.log("First ",first, " Second ",second);