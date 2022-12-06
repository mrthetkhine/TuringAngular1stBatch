import produce from "immer";
class Street {
    public readonly num: number;
    public readonly name: string;
    public constructor(num: number, name: string) {
        this.num = num;
        this.name = name;
    }
}
class Address {
    public readonly city: string;
    public readonly street: Street;
    public constructor(city: string, street: Street) {
        this.city = city;
        this.street = street;
    }
}
const address = new Address(
    "London",
    new Street(1, "rathbone square")
);
/*
const address2 = produce(address, draftAddress => {
    draftAddress.street.name = "Rathbone square";
});
*/
const baseState = [
    {
        title: "Learn TypeScript",
        done: true
    },
    {
        title: "Try Immer",
        done: false
    }
]

const nextState = produce(baseState, draftState => {
    draftState.push({title: "Tweet about it"})
    draftState[1].done = true
})
console.log('nextState ',nextState);