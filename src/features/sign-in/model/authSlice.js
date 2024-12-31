import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../shared/api/http-client";

const initialState = {
  user: {},
  status: null,
  error: null,
};

export const fetchLogIn = createAsyncThunk(
  "auth/fetchLogIn",
  async ({ username, password }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/login?username=${username}&password=${password}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const userId = data.user_id;
      const userResponse = await fetch(
        `http://23.111.216.140:8080/api/users/${userId}`
      );
      const userData = await userResponse.json();

      return userData;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogIn.fulfilled, (state, action) => {
        state.status = "resolved";
        state.user = action.payload;
      })
      .addCase(fetchLogIn.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
