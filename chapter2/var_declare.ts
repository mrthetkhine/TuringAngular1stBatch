function demo()
{
   if(true)
   {
        var i = "Hello";
        let j = 12;
        const k = 21;
        //k = 22;
        console.log("J is ",j);
   }
   {
        var i:string = "<string>22";
        let j = "Hello";
        console.log("J ",j);
   }
   console.log("i ",i);
   //console.log("J ",j);
}
demo();