import { Request, Response } from "express"
import app from "./app"

app.get("/", (req, res) => {
    res.send("Hello world!")
})