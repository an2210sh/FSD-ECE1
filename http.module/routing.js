import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
    console.log('hello world')
    console.log(req.url)

    if (req.url === "/") {

        const data = fs.readFileSync("home.html", "utf8")
        res.end()

    } else if (req.url === "/about") {

        const data = fs.readFileSync("about.html", "utf8")
        res.end(data)

    } else if (req.url === "/contact") {

        const data = fs.readFileSync("contact.html", "utf8")
        res.end(data)

    } else {

        res.end("404 Page Not Found")

    }
})

server.listen(3001, "127.0.0.1", () => {
    console.log("Server is running on port 3001")
})