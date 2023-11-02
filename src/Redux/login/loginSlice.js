import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const createUser = createAsyncThunk('users/createUser', async (username, thunkAPI) => {
  try {
    const user = { "name": username };
    const response = await axios.post("http://localhost:3000/users", user);
    if (response.status === 200 || response.status === 201) {
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    }
    return
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
    user: null,
    status: null,
    error: null,
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.status = "loading";
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    [createUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [getAllUsers.pending]: (state) => {
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