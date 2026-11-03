const fs = require("fs")

fs.mkdir("./myFolder", (err) => {
    if(err){
        console.log(err);
        return;

    }
    console.log("Folder created successfully");
fs.readdir("./myFolder1//myFolder2//myFolder3",{recursive:true}, (err, files) => {  
    if(err){
        console.log(err);
        return;
    }
    console.log("Directory Content", files);
})

});