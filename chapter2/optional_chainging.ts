var objectA:any = {
    nestedProperty: {
        name: "nestedPropertyName"
    },
    missing:{
        name  :"Missing name"
    }
}
console.log("name ",objectA.nestedProperty.name);
console.log("missing ",objectA?.missing?.name);