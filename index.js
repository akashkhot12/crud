const express = require("express");
const data = require("./api");
const app = express();

app.use(express.json())
app.use("/data",data).listen(5000,()=>{
    console.log("server is started");
})

