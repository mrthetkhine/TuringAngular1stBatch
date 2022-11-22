//Rule 1
let func = ()=>console.log('hello');
func();

//Rule 2
function higher(callback:()=>void)
{
    callback();
}
higher(func);

//Rule 3 
function getFunc():()=>void
{
    return func;
}
getFunc()();