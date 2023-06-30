const {readFile , writeFile} = require("fs");
console.log("start");
readFile("./built-in-modules/first.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error")
        return;
    }
    let first = result;
    readFile("./built-in-modules/path/second.txt",'utf8',(err,result)=>{
        if(err){
            console.log("error")
            return;
        } 
        let second = result;
       writeFile("./built-in-modules/path/fourth.txt",`here is the result ${first},${second}`,'utf8',(err,result)=>{
        if(err){
            console.log("error")
            return;
        }
        console.log("done with this task");
       }) 
    })
})
console.log("starting with the next task");
