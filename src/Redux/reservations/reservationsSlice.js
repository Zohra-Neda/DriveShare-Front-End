import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getReservations = createAsyncThunk('getReservations', async (_, {getState} ) => {
    try {
        const user = getState().login.user || JSON.parse(localStorage.getItem('user'));
        const data = {"user_id": user.id}
        const response = await axios.get(`http://localhost:3000/reservations?user_id=${user.id}`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const postReservations = createAsyncThunk('postReservations', async (reservation, {getState, dispatch}) => {
    try {
        const user = getState().login.user || JSON.parse(localStorage.getItem('user'));
        const reserve = {
            "user_id": user.id,
            "car_id": reservation.car_id,
            "city_id": reservation.city,
            "start_date": reservation.start_date,
            "end_date": reservation.end_date,
        }
        const response = await axios.post('http://localhost:3000/reservations', reserve);
        dispatch(getReservations());
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
            state.data = action.payload;
        })
    }
});

export default reservationsSlice.reducer;