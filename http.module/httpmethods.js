// import http  from 'http'
const http = require('http')
const fs = require('fs')

const data = fs.readFileSync('config.json')
const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.end("home page")
    } else if (req.url==='/config'){
        res.end(JSON.stringify(data))
    }else{
        res.end("page not exits")
    }
    
})  

server.listen(2010, "127.0.0.1", () => {
    console.log("Server is running on port 2010")
})