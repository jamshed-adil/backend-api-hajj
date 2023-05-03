import express from "express";
import userRouter from './routes/user.js'
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express()

config({
    path: './data/config.env'
})

//using middle wares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    method: ["GET", "POST"],
    credentials: true
}))

//using routes
app.use("/api/v1/users", userRouter)

app.get("/", (req, res) => {
    res.send("Nice working")
})