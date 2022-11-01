let tuple1: [string, boolean];
tuple1 = ["test", true];

console.log("Tuple1 ",tuple1[0], " 1 ",tuple1[1]);
tuple1[0] = "Change";
console.log("Tuple1 ",tuple1[0], " 1 ",tuple1[1]);

let [my_name,flag] = tuple1;
console.log("MyName ",my_name, " Flag ",flag);

let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["test"];

console.log("tuple optional ",tupleOptional);