import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import { config } from "dotenv";
import cors from "cors";
config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URI).then(() => {
  console.log("db connected succesfuly");
});

// create api
app.use(router);

app.listen(process.env.PORT || 8080, () => {
  console.log("server is running");
});
