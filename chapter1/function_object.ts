function processObj(obj:{
    name : string,
    age :number,
    school? : string
})
{
    console.log("Obj ",obj.name);
    console.log("School ",obj.school?.toUpperCase());
}
let obj = {
    name : "Tk",
    age : 38,
    /*school : "UCSY",*/
}
processObj(obj);