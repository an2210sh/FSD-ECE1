const fs = require("fs")
//calback based method


//create a file
fs.writeFile("notes.txt" , "Ece A", (err) => {
    console.log("Data suceesully written to file notes.txt")
})


fs.writeFile("notes.txt" , "Ece A", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Data suceesfully written to file notes.txt")
    }
})

    fs.readFile("notes.txt", "utf8", (err, data) => {
        if(err){
            console.log(err)
            return
        } 
        console.log(data);
    })

    const updateData = "Hello Ece A"
    fs.appendFile("notes.txt", updateData, (err) => { 
        if(err){
            console.log(err);
            return;
        }   
        console.log("File updated successfully");     
        
    })

fs.rmSync("notes.txt")