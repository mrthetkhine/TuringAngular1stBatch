function processData(data)
{
    console.log("Data received",data);
}
function getData(callback)
{
    console.log("Get Data start");
    setTimeout(()=>{
        console.log("GetData now completed");
        throw new Error("Something got messed up");
        //callback(200);
    },2000);
    console.log("Get Data completed");
}

try{
    let k = getData(processData);
    console.log("K is ",k);
}
catch(e)
{
    console.log("We can catch ",e);
}
