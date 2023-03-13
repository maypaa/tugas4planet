import { resolveSoa } from "dns";
import express from "express";
import { client } from "./db.js";

const app=express();

app.use(express.static("public"));
app.use((req,_res,next)=>{
    console.log(req.url);
    next();
});

//route
app.get("/api/planet", async(req,res)=>{
    const result = await (await client.query("SELECT * FROM planet"))
    res.send(result.rows);
});

app.listen(3000, ()=>{
    console.log("server berjalan");
});