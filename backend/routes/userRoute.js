import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsers } from "../controllers/user.controller.js";
//import { sendMessage, getMessage } from "../controllers/message.controller.js";



const router = express.Router();

router.get("/", protectRoute,getUsers)
//router.post("/send/:id", protectRoute,sendMessage)


export default router