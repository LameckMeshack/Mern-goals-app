import express from "express";
import dotenv from "dotenv";
import goalsRouter from "./routes/goalRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/goals", goalsRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
