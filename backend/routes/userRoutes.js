import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";
import userModel from "../models/userModel.js";
const userRouter = express.Router();

// userRouter.route("/").post(registerUser).
userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", protect, getMe);
// userRouter.get("/", async (req, res) => {
//   if (process.env.NODE_ENV === "development") {
//     const users = await userModel.find({});
//     res.status(200).json(users);
//   } else {
//     res.status(401).json({ message: "Unauthorised request in production" });
//   }
// });

export default userRouter;
