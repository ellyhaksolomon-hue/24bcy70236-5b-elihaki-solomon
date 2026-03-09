import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import methodOverride from "method-override";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://admin:admin123@cluster0.aewodlu.mongodb.net/appName=Cluster0")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});