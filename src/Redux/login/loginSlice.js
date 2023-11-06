import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from 'axios';

export const createUser = createAsyncThunk('users/createUser', async (username, thunkAPI) => {
  try {
    const user = { "name": username };
    const response = await axios.post("http://localhost:3000/users", user);
    if (response.status === 200 || response.status === 201) {
      localStorage.setItem('user', JSON.stringify(response.data));
      toast(`Welcome, ${username}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return response.data;
    }
    return
  } catch (error) {
    toast.error(`${error.message}!`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    status: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user');
      state.user = null;
      state.status = null;
    },
    refresh: (state) => {
      state.user = JSON.parse(localStorage.getItem('user'));
      if (state.user !== null) {
        state.status = "succeeded";
      }
    }
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
  },
});

export const { logout, refresh } = loginSlice.actions;
export default loginSlice.reducer;
