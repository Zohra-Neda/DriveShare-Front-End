import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getReservations = createAsyncThunk('getReservations', async () => {
    try {
        const response = await axios.get('http://localhost:3000/reservations');
        return response.data;
    } catch (error) {
        console.log(error);
    }
})



const reservationsSlice = createSlice({
    name: "reservations",
    initialState: {
        data: []
    },
    reducers: {
        addReservation: (state, action) => {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getReservations.fulfilled, (state, action) => {
            console.log(action.payload);
            state.data = action.payload;
        })
    }
});

export default reservationsSlice.reducer;