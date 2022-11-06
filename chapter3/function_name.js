function Hello()
{
    console.log("Hello ",this.name );
}
console.log("Hello.name ",Hello.name);
let func = function hello()
{
    console.log("Anno Function ",this.name);
}
func();
let k = Hello;
k();