import { createServer } from "http"

import cors from "cors"
import express from "express"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => {
  res.json({ message: "Server runnung" })
})

const httpServer = createServer(app)
httpServer.listen({ port: 3001 })
