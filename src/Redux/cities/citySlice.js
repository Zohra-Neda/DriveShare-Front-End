import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCities = createAsyncThunk('getCities', async (_, {rejectWithValue}) => {
    try {
        const res = await axios.get('http://localhost:3000/cities');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
});

const citySlice = createSlice({
    name: "cities",
    initialState: {
        data: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getCities.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    }
});

export default citySlice.reducer;

export const selectAllCities = (state) => state.city.data;