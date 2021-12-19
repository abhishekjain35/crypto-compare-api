import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import api from "./routes/index.js";
import bodyParser from "body-parser";
dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch(() => console.log("DB NOT CONNECTED"));

app.use("/api", api);

const port = 8000;

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
