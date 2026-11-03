import express from 'express'
const app = express()
Const data = {
Name :"sandeep"
age : 19,
College: "ABESEC"
}
app.get("/",(req, res)=>{
    res.send(data)
})
if (req.url==="/contact"){
    res.writtenHead(200, {
        "content-Type": "text/html"
    })
    res.end(index.html)

}
app.listen(8000,()=>{
      console.log("server is running....");
      
})
