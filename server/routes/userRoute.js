import express from "express"
import { login, register } from "../controllers/userContoller.js"
import { Router } from "express"


const router = express.Router();

router.post("/login" , login);
router.post("/register" , register);

export default router;