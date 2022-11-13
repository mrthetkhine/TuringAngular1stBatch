
function getData(n)
{
    console.log("Get Data start");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("GetData now completed");
            if(n==0)
            {
                reject("N is zero")
            }
            else
            {
                resolve(200);
            }
            
        },2000);
    });
   
    console.log("Get Data completed");
}

getData(0).then(data=>console.log("Data from promise ",data),
                error=>console.log("error ",error.nothing.something))
          .catch(error=>console.log("Promise error catch ",error))
getData(10).then(data=>data*2)
           .then(data=>console.log(data));
