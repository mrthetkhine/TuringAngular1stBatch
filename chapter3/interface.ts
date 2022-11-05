interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}
interface Bear
{
    newProperty:string
}
const bear :Bear = {
    name : "Bear",
    honey : true,
    newProperty:"",
} 