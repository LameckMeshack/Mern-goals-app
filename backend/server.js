import express from "express";
import dotenv from "dotenv";
import color from "colors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import goalsRouter from "./routes/goalRoutes.js";
import userRouter from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalsRouter);
app.use("/api/users", userRouter);

//Serve frontend
if (process.env.NODE_ENV === "production") {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    // res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production mode"));
}

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
