function computeLater(a,b,callback)
{
    return new Promise((resolve,reject)=>{
        if(a== 0 && b==0)
        {
            reject( new Error('A and b is zero'));
        }
        else
        {
            resolve(a/b);
        }
    },1000);
}
function print(value)
{
    console.log("Value ",value);
}
computeLater(0,0)
            .then(print)
            .catch(error=>console.log('Error ==>',error))

console.log('After call to compute later ');