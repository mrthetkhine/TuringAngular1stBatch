let data: any = {
    method:function()
    {
        console.log("Method");
    }
};
data.method();

let data2: unknown = {
    method:function()
    {
        console.log("Method");
    }
};
data2.method();