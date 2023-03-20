import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
mongoose.connect('mongodb://localhost:27017/crud-mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected!"))

app.listen(5000, () => console.log('Back-end server started at port 5000'))