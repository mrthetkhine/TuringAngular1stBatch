function delayedPromise(): Promise<string> {
    console.log('Delaypromise start');
    return new Promise<string>(
            (
            resolve: (str:string) => void,
            reject: () => void
            ) => {
            setTimeout(() => {
                console.log(`2. calling resolve()`)
                resolve("Hello World");
            }, 1000);
    });
}
function getAnotherDelayedPromise(): Promise<string> {
    console.log('getAnotherDelayedPromise start');
    return new Promise<string>(
            (
            resolve: (str:string) => void,
            reject: () => void
            ) => {
            setTimeout(() => {
                console.log(`2. calling getAnotherDelayedPromise resolve()`)
                resolve("Good evening");
            }, 1000);
    });
}
async function getSomething()
{
    return "something";//return Promise.resolve("Something")
}
/**
 delayedPromise.then(data=>{
    result = data;
    getAnotherDelayedPromise.then((another)=>{
        console.log("Result ",result, " another ",another);
    });
 })
 */
async function getDelayData()
{
    console.log("Async getDelaydata run");
    let result = await delayedPromise();//promise.then(data=> result =data)
    let another = await getAnotherDelayedPromise();
    console.log("Result ",result, " another ",another);
}
getDelayData();
getSomething().then(data=>console.log("Data from get someting ",data));