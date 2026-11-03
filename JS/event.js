import fs from "fs";

export function readIntroFile() {
    return fs.promises.readFile(new URL("./intro.txt", import.meta.url), "utf8");
}

// setTimeout(() => {
//     console.log("SetTimeout");
// },1000);


// fs.readFile("intro.txt", "utf8" , (err,data)=>{
//     console.log("file read completely");
// })

// setInterval(()=> {
//     console.log("Set Interval after 5 ms");
// },500);

// setImmediate(()=>{
//     console.log("Set Immediate");
// })


fs.readFile("intro.txt", "utf8" , (err,data)=>{
     console.log("file read completely");
     setTimeout(()=>{
         console.log("SetTimeout");
     },0);
     setImmediate(()=>{
         console.log("Set Immediate");
     })
 })