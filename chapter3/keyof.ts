interface IPerson {
    id: number;
    name: string;
}
type PersonPropertyName = keyof IPerson; // "id"|"name"
let dyanmicPropery:PersonPropertyName = "id";

let obj:IPerson = {
    id : 1,
    name : "Something"
};
let propertyName:PersonPropertyName = "id";
console.log("Obj ",obj[propertyName]);