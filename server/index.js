import express from "express";
import * as dotenv from 'dotenv'
import cors from "cors";
import bodyParser from "body-parser";

import connectDatabase from "./database/connect.js";
import home from "./routes/home.js";
import post from "./routes/post.js";

const app = express();

const PORT = process.env.PORT || 8080;

// Configurations
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
dotenv.config();

app.use("/api/v1/home", home);
app.use("/api/v1/post", post);

const startServer = async () => {
  try {
    connectDatabase(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log("Server running"));
  } catch (err) {
    console.log(err);
  }
};

startServer();
