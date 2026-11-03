import fs from "fs";    

//Readable Streams

const readStream = fs.createReadStream("input.txt",
    {encoding : "utf-8"}
)


readStream.on("data", (chunk) => {
    console.log("Data Received ");
    console.log("Data :", chunk)
})

readStream.on("end", () => {
    console.log("END");
})


readStream.on("error", (error) => {
    console.log("Error :", error.message);
})

//Create Write Stream
const writeStream = fs.createWriteStream("output.txt");

writeStream.write("yeahhhh\n");

writeStream.on("finish", () => {
    console.log("Data has been written");
})

writeStream.on("error", (error) => {   
    console.log("Error :", error.message);
})

readStream.pipe(writeStream)