const fs = require("fs")

function sizeChecker(filename) {
   const limit = 2// 2MB in bytes
   const stats = fs.statSync(filename)

   if(stats.size > limit){
      console.log(`File should be less than ${limit} MB`);
   } else {
    console.log("File has been submitted");
   }
}



sizeChecker("notes.txt")