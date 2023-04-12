import express from "express";

const app = express()

// api's

app.get("/",(req,res)=>{
    res.send("working good")
})

app.listen(9000,()=>console.log(`server started in localhost:9000`))

