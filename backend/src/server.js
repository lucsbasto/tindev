const mongoose = require("mongoose")
const express = require("express");
const routes = require("./routes")
const bodyParser = require("body-parser")
const cors = require('cors')
const PORT = 3333
const urlDB = "mongodb+srv://lucsbasto:123123123@clusterapinodejs-lcggx.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(urlDB, { useNewUrlParser: true })
const server = express();
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())
server.use(routes);
server.listen(PORT);
console.log("Server running on ", PORT)