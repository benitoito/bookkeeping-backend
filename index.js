import express from "express";
import cors from 'cors'
import "dotenv/config"

import authRouter from "./routes/Authentication/authentication.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

app.use(cors());

app.use("/", authRouter)


app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))


