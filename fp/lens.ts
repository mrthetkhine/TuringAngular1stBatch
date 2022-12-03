import * as R from 'ramda';
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
class Company {
    public readonly name: string;
    public readonly addresses: Address[];
    public constructor(name: string, addresses: Address[]) {
        this.name = name;
        this.addresses = addresses;
    }
}
interface Lens<T1, T2> {
    get(o: T1): T2;
    set(o: T2, v: T1): T1;
}
const streetLens: Lens<Address, Street> = {
    get: (o: Address) => o.street,
    set: (v: Street, o: Address) => new Address(o.city, v)
}
const address = new Address(
    "London",
    new Street(1, "rathbone square")
);
const street = streetLens.get(address);
console.log('Street ', street);
const address2 = streetLens.set(
    new Street(
        address.street.num,
        R.toUpper(address.street.name)
    ),
    address
);
console.log('Address 2 ', address2);
function composeLens<A, B, C>(
    ab: Lens<A, B>,
    bc: Lens<B, C>
): Lens<A, C> {
    return {
        get: (a: A) => bc.get(ab.get(a)),
        set: (c: C, a: A) => ab.set(bc.set(c, ab.get(a)), a)
    };
}

const nameLens: Lens<Street, string> = {
    get: (o: Street) => o.name,
    set: (v: string, o: Street) => new Street(o.num, v)
};
const streetNameLens = composeLens(streetLens, nameLens);
const address3 = new Address(
    "London",
    new Street(1, "rathbone square")
);
const streetName = streetNameLens.get(address3);
console.log('Street Name ', streetName);
const address4 = streetNameLens.set(R.toUpper(address3.street.name), address3);
console.log('Address4 ', address4);

function overLens<S, A>(
    lens: Lens<S, A>,
    func: (a: A) => A,
    s: S
): S {
    return lens.set(func(lens.get(s)), s)
}
const address5 = new Address(
    "London",
    new Street(1, "rathbone square")
);
const address6 = overLens(streetNameLens, R.toUpper, address);
console.log('Address6 ',address6);