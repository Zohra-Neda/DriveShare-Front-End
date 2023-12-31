import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCities = createAsyncThunk('getCities', async (_, {rejectWithValue}) => {
    try {
        const res = await axios.get('https://drive-share-app.onrender.com/cities');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
});

export const postCities = createAsyncThunk('postCities', async (city) => {
    try {
        const response = await axios.post('https://drive-share-app.onrender.com/cities', city);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

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