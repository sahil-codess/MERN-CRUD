import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/userRoutes.js";


const app = express();
mongoose.connect('mongodb://0.0.0.0:27017/crud-mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected!"))

app.use(cors());
app.use(express.json());

app.use(UserRoute);

app.listen(5000, () => console.log('Back-end server started at port 5000'))