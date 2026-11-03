import http from 'http';
import fs from 'fs';

// Create a basic server
const server = http.createServer((req, res) => {

    console.log("Hello world");

    const order = {
        orderId: 12341,
        des: "Delhi",
        source: "GZB",
        username: "Gaurav"
    };

    const data = fs.readFileSync("index.html", "utf8");

    console.log(data);

    res.writeHead(404, {
        "Content-Type": "text/html",
        "custom-header": "Hello ECE"
    });

    res.end(data);
});

server.listen(9001, "127.0.0.1", () => {
    console.log("Server is running on port 9001");
});