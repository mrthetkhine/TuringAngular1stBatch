let a;
console.log("A is ",a);

let k :any = {
    name : "Tk"
};
console.log("k.age ",k.age);

let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
    console.log(`array[${i}] = ${array[i]}`);
};

k = null;
console.log("K ",null);
console.log("Type of undefined ",typeof(undefined));
console.log("Type of null",typeof(k));