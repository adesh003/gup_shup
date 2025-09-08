import { createSlice } from "@reduxjs/toolkit";
import LoginUserThunk from "./userThunk";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    Login: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(LoginUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(LoginUserThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
