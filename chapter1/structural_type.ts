class MyClass
{
    name:string;
    age:number;
    school : string = "";
    constructor(name:string,age:number)
    {
        this.name = name;
        this.age = age;
    }
   
}
class AnotherClass
{
    name:string;
    age:number;

    constructor(name:string,age:number)
    {
        this.name = name;
        this.age = age;
    }
}
let obj :MyClass = {
    name : "Tk",
    age : 38,
    school:"",
};
let another: AnotherClass;
another = obj;