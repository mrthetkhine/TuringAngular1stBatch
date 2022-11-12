class C {
    x = 0;
    y = 0;
 } 
type TypeC = InstanceType<typeof C>;
let obj :TypeC = {
    x : 200,
    y : 300
};
console.log("Obj ",obj);