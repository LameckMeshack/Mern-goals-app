// @desc    Get goals
// @route   GET /api/goals
// @access  Private
export const getGoals = (req, res) => {
  res.status(200).json({ message: "Geat Goals" });
};

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
export const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goasl" });
};

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
export const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
export const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};
