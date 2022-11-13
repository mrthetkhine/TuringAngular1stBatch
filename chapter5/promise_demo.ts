function div(a:number,b:number):Promise<number>
{
    if(b==0)
    {
        //console.error();
        return Promise.reject("B is zero");
    }
    else
    {
        return Promise.resolve( a/b);
    }
}
div(10,2).then(result=>console.log("Result ",result),
             error=>console.log("Error ",error));
console.log('Another code');