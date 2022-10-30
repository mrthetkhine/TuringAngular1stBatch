interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear:Bear = {
    name : 'Bear Name',
    honey:true
}
console.log("Bear ",bear);