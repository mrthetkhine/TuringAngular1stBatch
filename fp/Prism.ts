import * as R from 'ramda';
type Maybe<T> = T | null;
interface Prism<T1, T2> {
    get(o: T1): Maybe<T2>,
    set(a: T2, o: T1): T1;
}
function composePrism<A, B, C>(ab: Prism<A, B>, bc: Prism<B, C>): Prism<A, C> {
    return {
        get: (a: A) => {
            const b = ab.get(a)
            return b == null ? null : bc.get(b)
        },
        set: (c: C, a: A) => {
            const b = ab.get(a)
            return b == null ? a : ab.set(bc.set(c, b), a)
        }
    }
}
function overPrism<S, A>(
    prism: Prism<S, A>,
    func: (a: A) => A,
    s: S): S {
    const a = prism.get(s)
    return a ? prism.set(func(a), s) : s
}
export class Street {
    public readonly num: number;
    public readonly name: string;
    public constructor(num: number, name: string) {
        this.num = num;
        this.name = name;
    }
    toString() {
        return `No ${this.num} , Street ${this.name}`
    }

}
export class Address {
    public readonly city: string;
    public readonly street: Street;
    public constructor(city: string, street: Street) {
        this.city = city;
        this.street = street;
    }
}
const firstCharacterPrism: Prism<string, string> = {
    get: s => s ? s.substring(0, 1) : null,
    set: (a, s) => s.length ? a + s.substring(1) : ""
}
const streetPrism: Prism<Address, Street> = {
    get: (o: Address) => o.street,
    set: (v: Street, o: Address) => new Address(o.city, v)
};
const namePrism: Prism<Street, string> = {
    get: (o: Street) => o.name,
    set: (v: string, o: Street) => new Street(o.num, v)
};
/*
const address = new Address(
    "London",
    new Street(1, "rathbone square")
);
*/
const address = new Address(
    "London",
    new Street(1, "")
);
const streetNameFirstCharacterPrism = composePrism(
    composePrism(streetPrism, namePrism),
    firstCharacterPrism
);
console.log('FirtCharPrim get ', firstCharacterPrism.get(''));
console.log('FirtCharPrim set ', firstCharacterPrism.set('k', 'hello'));

const address2 = overPrism(streetNameFirstCharacterPrism, R.toUpper, address);
console.log('Address2 ',address2)

type Either<T1, T2> = T1 | T2;
type Domicile = Either<
       { type: "office", address: Address },
       { type: "personal", address: string }
>;
const addressPrism: Prism<Domicile, Address> = {
    get: d => d.type === "office" ? d.address : null,
    set: (address, d) => d.type === "office" ? { type: "office", address } : d
}
const domicile1: Domicile = { type: "office", address: address };
const domicile2: Domicile = { type: "personal", address: "23 high street" };
const address1 = addressPrism.get(domicile1);
const address3 = addressPrism.get(domicile2);
console.log('Address 1 ',address1);
console.log('Address 3 ',address3);