import { createAsyncThunk } from "@reduxjs/toolkit";


const LoginUserThunk = createAsyncThunk(
  "user/fetchUserData",
  async (userId, { extra }) => {
 console.log("jeee hello")
  }
);

export default LoginUserThunk;