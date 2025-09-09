import express from "express"
import { login } from "../controllers/userContoller.js"
import { Router } from "express"


const router = express.Router();

router.get("/login" , login);

export default router;