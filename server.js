const express = require('express')
const nunjucks = require('nunjucks')

const routes = require('./routes')
const server = express()

server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    autoescape: true,
    express: server,
    noCache: false,
})

server.get("/", function(req, res){
    return res.render("layout.njk")
})
server.listen(5000, function(){
    console.log("server is running")
})
