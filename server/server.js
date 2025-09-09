import dotenv from "dotenv"
dotenv.config();
import express from "express";
import userRouter from "./routes/userRoute.js";
import { connectDb } from "./db/connection1.db.js";

connectDb();
const app = express();
app.use(express.json());

const PORT = process.env.PORT

app.use('/api/v1/user' , userRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})