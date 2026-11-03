import express from 'express'
import fs from 'fs'

// const app = express()

// app.get('/home', (req, res) => {

//     const data = fs.readFileSync('index.html', 'utf-8')

//     res.send(data)         

// })

// const PORT = 3004

// app.listen(PORT, () => {
//     console.log("Server running ........")
// })

const app=express()
app.use(express.json())
const bookData = JSON.parse(fs.readFileSync("./data/books.json",))
app.get("/api/v1/books",(req,res)=>{
    try{
   let id=req.params.id
   const book = bookData.find(book => book.id === id)
   if(!book){
    res.status(404).json({
        status:"Fail",
        message:'Book not found for this id :${id}'
    })
}else{
    res.status(200).json({
        status:"Success",
        data:{
            book : book
        }
    })
}


 
}catch(error){
    res.status(404).json({
        status:"fail",
        message:"Bokks not found"
    })
}
})

// app.get("/api/v1/books/:id",(req,res)=>{
//    let id=req.params.id
//    const book = bookData.find(book => book.id === id)
//    res.send(book)
// })
app.get("/api/v1/books",(req,res)=>{
    console.log("Post req")
    console.log(req.body)

    res.json(req.body)

})

app.delete("/api/v1/books/:id", (req, res) => {
  const index = booksData.findIndex((book) => book.id === req.params.id);
})

app.listen(8000,()=>{
    console.log("Server is running ..........")
}) 