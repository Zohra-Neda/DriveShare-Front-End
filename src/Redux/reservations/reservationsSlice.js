import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getReservations = createAsyncThunk('getReservations', async () => {
    try {
        const response = await axios.get('http://localhost:4000/reservations');
        return response.data;
    } catch (error) {
        console.log(error);
    }
})



const reservationsSlice = createSlice({
    name: "reservations",
    initialState: [
        {
            "start_date": "2023-10-30",
            "end_date": "2023-12-28",
            "user_id": 1,
            "car_id": 1,
            "city_id": 1
        },
        {
            "start_date": "2023-10-30",
            "end_date": "2023-12-28",
            "user_id": 1,
            "car_id": 1,
            "city_id": 1
        },{
            "start_date": "2023-10-30",
            "end_date": "2023-12-28",
            "user_id": 1,
            "car_id": 1,
            "city_id": 1
        }
    ],
    reducers: {
        addReservation: (state, action) => {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getReservations.fillfulled, (state, action) => {
            return state = action.payload;
        });
    }
});

export default reservationsSlice.reducer;