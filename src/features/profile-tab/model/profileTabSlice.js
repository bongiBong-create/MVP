import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../../shared";

const initialState = {
  universities: [],
  users: [],
  isLoading: false,
};

export const getUniversities = createAsyncThunk(
  "profileTab/getUniversities",
  async (__, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/universities`);

      const data = response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addFetchUniversity = createAsyncThunk(
  "profileTab/addFetchUniversity",
  async (university, thunkAPI) => {
    console.log(university);
    try {
      const response = await fetch(`${API_URL}/universities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(university),
      });

      if (!response.ok) {
        throw new Error("Ошибка при добавлении университета");
      }

      thunkAPI.dispatch(addUniversity(university));

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const profileTabSlice = createSlice({
  name: "profileTab",
  initialState,
  reducers: {
    addUniversity: (state, action) => {
      state.universities.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUniversities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUniversities.fulfilled, (state, action) => {
        state.universities = action.payload;
        state.isLoading = false;
      })
      .addCase(addFetchUniversity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFetchUniversity.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload)
      });
  },
});

export const { addUniversity } = profileTabSlice.actions;

export const profileTabReducer = profileTabSlice.reducer;
