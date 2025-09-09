import express from "express";
import userRouter from "./routes/userRoute.js";
const app = express();

const PORT = 3000

app.use('/api/v1/user' , userRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})