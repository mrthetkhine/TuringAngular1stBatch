let a = 23;
let b = a;

a ++;
console.log("A ",a , " B ",b);

let obj = {
    value : 23
};
let obj2 = obj;
obj.value ++;
console.log("Obj ",obj, " Obj2 ",obj2);

obj = {
    value : 20
};
obj.value ++;
console.log("Obj ",obj, " Obj2 ",obj2);

obj2 = {...obj};
console.log("Obj2 == obj ", obj2==obj);