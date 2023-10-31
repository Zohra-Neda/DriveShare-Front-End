import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk('users/createUser', async ({ username }, thunkAPI) => {
  try {
    const user = { username };
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    status: null,
    error: null,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: {
    [createUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.username = action.payload.username;
    },
    [createUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;