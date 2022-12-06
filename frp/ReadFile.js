const fs = require("fs");
fs.readFile('./package.json',(err,data)=>{
    console.log('Data ',data.toString());
});