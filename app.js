const express=require("express");
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    console.log("")
    res.send("Hello");
});

app.listen(3000,function(){
    console.log("listening on port 3000");
});