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
interface Lens<T1, T2> {
    get(o: T1): T2;
    set(o: T2, v: T1): T1;
}
type Prop<T, K extends keyof T> = (o: T) => T[K];
type Assoc<T, K extends keyof T> = (v: T[K], o: T) => T;

const propStreet: Prop<Address, "street"> = (o: Address) => o.street;
const assocStreet: Assoc<Address, "street"> = (v: Address["street"], o: Address) => {
    return new Address(o.city, v);
};
const lens = <T1, K extends keyof T1>(
    getter: Prop<T1, K>,
    setter: Assoc<T1, K>,
): Lens<T1, T1[K]> => {
    return {
        get: (obj: T1) => getter(obj),
        set: (val: T1[K], obj: T1) => setter(val, obj),
    };
}
const streetLens = lens(propStreet, assocStreet);
const address = new Address(
    "London",
    new Street(1, "rathbone square")
);
let streetName = streetLens.get(address);
console.log('StreeName ', streetName);

const view = <T1, T2>(lens: Lens<T1, T2>, obj: T1) => lens.get(obj);
console.log('Street Name via view ', view(streetLens,address));
const set = <T1, K extends keyof T1>(
    lens: Lens<T1, T1[K]>,
    val: T1[K],
    obj: T1
) => lens.set(val, obj);
let address2 = set(streetLens,'Street Updated',address);
console.log('Address 2',address2);
