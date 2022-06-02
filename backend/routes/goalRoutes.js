import expres from "express";
import {
  deleteGoal,
  getGoals,
  updateGoal,
  setGoal,
} from "../controllers/goalController.js";
const goalsRouter = expres.Router();

goalsRouter.route("/").get(getGoals).post(setGoal);
goalsRouter.route("/:id").put(updateGoal).delete(deleteGoal);

// goalsRouter.get("/", getGoals);
// goalsRouter.post("/", setGoal);
// goalsRouter.put("/:id", updateGoal);
// goalsRouter.delete(deleteGoal);

export default goalsRouter;
