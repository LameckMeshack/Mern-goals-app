import expres from "express";
import {
  deleteGoal,
  getGoals,
  updateGoal,
  setGoal,
} from "../controllers/goalController.js";
import protect from "../middleware/authMiddleware.js";
const goalsRouter = expres.Router();

goalsRouter.route("/").get(protect, getGoals).post(protect, setGoal);
goalsRouter.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

// goalsRouter.get("/", getGoals);
// goalsRouter.post("/", setGoal);
// goalsRouter.put("/:id", updateGoal);
// goalsRouter.delete(deleteGoal);

export default goalsRouter;
