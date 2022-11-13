function processData(data)
{
    console.log("Data received",data);
}
function getData(callback)
{
    console.log("Get Data start");
    setTimeout(()=>{
        console.log("GetData now completed");
        callback(200);
    },2000);
    console.log("Get Data completed");
}

let k = getData(processData);
console.log("K is ",k);