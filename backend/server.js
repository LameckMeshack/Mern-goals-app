import express from "express";
import dotenv from "dotenv";
import color from "colors";
import goalsRouter from "./routes/goalRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalsRouter);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
