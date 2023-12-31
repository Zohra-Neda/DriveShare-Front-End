import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCars } from "../cars/carsSlice";
import { toast } from "react-toastify";
import axios from "axios";

export const getReservations = createAsyncThunk('getReservations', async (_, {getState, rejectWithValue} ) => {
    try {
        const user = getState().login.user || JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`https://drive-share-app.onrender.com
/reservations?user_id=${user.id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const postReservations = createAsyncThunk('postReservations', async (reservation, {getState, dispatch, rejectWithValue}) => {
    try {
        const user = getState().login.user || JSON.parse(localStorage.getItem('user'));
        const cars = getState().cars.data;
        const car = cars.find(car => car.id === parseInt(reservation.car_id));
        const reserve = {
            ...reservation,
            "user_id": `${user.id}`,
            "city_id": reservation.city,
        }
        const response = await axios.post('https://drive-share-app.onrender.com/reservations', reserve);
        if (response.status === 200 || response.status === 201) {
            dispatch(getCars());
            dispatch(getReservations());
            dispatch(clearCarToReserve());
            toast(`Reserved ${car.model} ${car?.name} successfully!`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        return response.data;
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
        return rejectWithValue(error.message)
    }
})




const reservationsSlice = createSlice({
    name: "reservations",
    initialState: {
        data: [],
        carToReserve: null,
    },
    reducers: {
        addReservation: (state, action) => {
            state.push(action.payload);
        },
        setCarToReserve: (state, action) => {
            state.carToReserve = action.payload;
        },
        clearCarToReserve: (state) => {
            state.carToReserve = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getReservations.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
});

export const {setCarToReserve, clearCarToReserve} = reservationsSlice.actions;
export default reservationsSlice.reducer;
