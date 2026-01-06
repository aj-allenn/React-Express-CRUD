import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import todo from "./models/todo.js";
import todoRoutes from "./routes/todoRoutes.js"

dotenv.config()
connectDB();
const app=express();
const PORT=process.env.PORT;
app.use(cors());
app.use(express.json());


app.get("/",(res,req)=>{
    res.send("todo Api running")
});



app.use("/api/todos",todoRoutes);


app.listen(PORT,()=>{
    console.log(`server running at http://localhost ${PORT}`);
    });