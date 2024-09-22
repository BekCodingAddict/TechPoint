import dotenv from "dotenv";
dotenv.config();

import connectToDatabase from "./db.js";
import express from "express";
import cors from "cors";

connectToDatabase();
const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.get("/", (req, res) => {
  res.send("API is rurring...");
});

app.listen(port, () => {
  console.log(`Back-End Server runs on port: ${port}! `);
});
