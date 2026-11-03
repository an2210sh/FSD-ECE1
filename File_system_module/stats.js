const fs = require("fs")

fs.stat("notes.txt",(err,stats)=>{
    if(err) {
        console.log(err);
        return;
    }
    // console.log("Information about[notes.txt]",stats);
    // console.log("Size of the file:", stats.size);
    // console.log("Creation time of the file:", stats.birthtime.toISOString(  ).split("T"));
    // console.log("Last modified time of the file:", stats.mtime.toISOString().split("T"));

})

// const user = {
//     name: "Gaurav",
//     age: 90,
//     city: "GHZ"

// }
// user["name"] 





fs.stat("./myFolder1",(err,stats)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(stats.size);
});
