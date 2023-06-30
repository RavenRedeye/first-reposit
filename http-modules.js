const http = require("http");
let server = http.createServer((req,res)=>{
    if(req.url=="/"){
  res.end("welcome to the home page")
    }
    if(req.url=="/about"){
        res.end("welcome to the about page");
    }
    res.end(`
    <h1>OOPS ERROR LOADING</h1>
    <a href="/">return to home page</a>
    `)
})
server.listen(5000);