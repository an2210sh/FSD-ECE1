const fs = require("fs");

fs.watch("intro.txt", (eventType, filename) => {
    console.log("Event :",eventType);
    console.log("Filename :",filename);
})

setTimeout(() => {
    console.log("Watcher Closed");
},5000)
