import express from "express";

const app = express();

 app.listen(3000, () => {
    console.log("Server on...");
 });

 app.get("/", (req, res) => {
    res.status(200).send("It's working!");
 });