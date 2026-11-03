const http = require("http")

const server = http.createServer((req,res) =>{
    if (req.method==="GET" && req.url === "/"){
        res.end("GET Request")
    }else if (req.method==="POST" && req.url === "/"){
        res.end("POST Request")
        
    }else if(req.method==="PATCH" && req.url=="/users"){
        res.end("PATCH Request")
    }

})
server.listen(3003,(req,res)=>{
    console.log("Server is running on the port 3003")
})