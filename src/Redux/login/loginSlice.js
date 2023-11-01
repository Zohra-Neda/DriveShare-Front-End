import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk('users/createUser', async (username, thunkAPI) => {
  try {
    const user = { name: username };
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

export const getAllUsers = createAsyncThunk('users/getAllUsers', async (username, thunkAPI) => {
  try {
    const response = await fetch("http://localhost:3000/users");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getUser = createAsyncThunk('users/getUser', async (username, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${username}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    users: [],
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
      console.log(action);
      state.username = action.payload?.username;
    },
    [createUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [getAllUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;

export const selectAllUsers = (state) => state.users;