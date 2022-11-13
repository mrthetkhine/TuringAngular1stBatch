function errorPromise(): Promise<string> {
    return new Promise<string>(
        (
            resolve: (result: string) => void,
            reject: (error: string) => void) => {
            setTimeout(() => {
                console.log(`2. calling reject()`)
                reject("promise rejected");
            }, 1000);
    } );
}

async function callErrorPromise() {
    try 
    {
        console.log(`1. calling errorPromise()`);
        await errorPromise();
    } catch (error) 
    {
        console.log(`3. await threw : ${error}`);
    } 
}
callErrorPromise();