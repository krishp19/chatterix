import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/authRoute.js"
import messageRoute from "./routes/messageRoute.js"
import userRoute from "./routes/userRoute.js"

import {app, server} from './socket/socket.js'

import { connectDb } from "./db/connectDb.js";


const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); //to parse the incoming requests with json payload
app.use(cookieParser());

app.use("/api/auth",authRoute)
app.use("/api/messages",messageRoute)
app.use("/api/user",userRoute)

app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("/", (req,res) => {
//     res.send("Hello World!");
// })

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});



server.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
});