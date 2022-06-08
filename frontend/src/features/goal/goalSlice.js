import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import goalsService from "./goalService";

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createGoal = createAsyncThunk(
  "goals/create",
  async (goalData, thunkAPI) => {
    try {
      // const token = localStorage.getItem("token");
      const token = thunkAPI.getState().auth.user.token;
      return await goalsService.createGoal(goalData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload);
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.goals = [];
      });

    // Get all goals
    // builder
    //   .addCase(getGoals.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getGoals.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.goal = action.payload;
    //   })
    //   .addCase(getGoals.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.message = action.payload;
    //     state.goal = [];
    //   });
    // Get goal by id
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
