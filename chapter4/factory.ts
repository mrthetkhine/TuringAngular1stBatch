function create<Type>(c: { new (): Type }): Type {
  return new c();
}
class Some
{
    constructor()
    {
        console.log("Some constructor");
    }
}
let obj = create(Some);
console.log("Obj ",obj);