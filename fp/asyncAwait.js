function getData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Now get data');
            resolve('Hello');
        },1000);
    });
}

async function process()
{
    let result =await getData();
    console.log('Data from promise ',result);
    console.log('Executed');
}
process();