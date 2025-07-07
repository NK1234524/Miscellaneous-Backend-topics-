const express = require("express");
const app = express();
const port = 8080;

app.get("/register",(req,res)=>{
    res.send("Get response from server");
    console.log("get request");
});

app.post("/register",(req,res)=>{
    res.send("Post response from server");
    console.log("post request");
})




app.listen(port,()=>{
    console.log(`Listining port ${port}`);
});
