const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)

app.use(bodyParser.json())
app.use(express.static("./public"))

app.use(
    express.urlencoded({
        extended: true,
    })
)

server.listen(8081, () => {
    console.log("Server on port 8081")
})
