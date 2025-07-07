const express = require("express");
const app = express();
const port = 8080;

app.get("/register",(req,res)=>{
    // res.send("Get response from server");
    let {user,password}=req.query;
    res.send(`Standard get request Welcome to the page ${user}`);
    console.log("get request");
});

app.use(express.urlencoded({extended:true}));

app.post("/register",(req,res)=>{
    let {user,password}=req.body;//body contains all the information about the client has entered
    console.log(`The post request is ${user}`);
    res.send(`Welcome ${user}`);
});

app.listen(port,()=>{
    console.log(`Listining port ${port}`);
});
