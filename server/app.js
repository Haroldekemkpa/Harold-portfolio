import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  console.log("hello world");
  return res.status(200).json({ message: "Hey harold" });
});

app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
});
