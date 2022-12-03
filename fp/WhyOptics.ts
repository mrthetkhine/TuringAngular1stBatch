import * as R from 'ramda';

export class Street {
    public readonly num: number;
    public readonly name: string;
    public constructor(num: number, name: string) {
        this.num = num;
        this.name = name;
    }
    toString()
    {
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
const company1 = new Company(
    "Facebook",
    [
        new Address(
            "London",
            new Street(1, "rathbone square")
        ),
        new Address(
            "Dublin",
            new Street(5, "grand canal square")
        )
    ]    
);

//company1.addresses = company1.addresses.map(a => R.toUpper(a.street.name));
//company.adress.street.name =
const company2 = new Company(
      company1.name,
      company1.addresses.map((a) =>
          new Address(
              a.city,
              new Street(
                a.street.num,
                R.toUpper(a.street.name)
            )
 ) )
);
console.log("Company2 ",company2.addresses[0].street.name);
