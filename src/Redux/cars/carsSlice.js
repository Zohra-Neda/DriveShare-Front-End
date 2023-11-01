import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getCars = createAsyncThunk('getCars', async (_, {rejectWithValue}) => {
    try{
        const response = await axios.get('http://localhost:3000/cars');
        return response.data;
    }catch(err) {
        return rejectWithValue(err.message);
    }
});

export const postCar = createAsyncThunk('postCars', async (car, {rejectWithValue}) => {
    try{
        const response = await axios.post('http://localhost:3000/cars', car);
        getCars();
        return response.data;
    }catch(err) {
        return rejectWithValue(err.message);
    }
});

export const deleteCar = createAsyncThunk('deleteCar', async (id, {rejectWithValue}) => {
    try{
        const response = await axios.delete(`http://localhost:3000/cars/${id}`);
        getCars();
        return response.data;
    }catch(err) {
        return rejectWithValue(err.message);
    }
});

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        data: [],
        loading: false,
        loadingFailed: false,
        loadingError: '',
        posting: false,
        postingFailed: false,
        postingError: '',
    },
    reducers: {
        addCar: (state, action) => {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCars.pending, (state) => {
            state.loading = true;
            state.loadingFailed = false;
            state.loadingError = null;
        })
        .addCase(getCars.fulfilled, (state, action) => {
            state.loading = false;
            state.loadingFailed = false;
            state.loadingError = null;
            state.data = action.payload;
        })
        .addCase(getCars.rejected, (state, action) => {
            state.loading = false;
            state.loadingFailed = true;
            state.loadingError = action.payload;
        })
        .addCase(postCar.pending, (state) => {
            state.posting = true;
        })
        .addCase(postCar.fulfilled, (state) => {
            state.posting = false;
        })
        .addCase(postCar.rejected, (state, action) => {
            state.posting = false;
            state.postingFailed = true;
            state.postingError = action.payload;
        })
    }
});

export default carsSlice.reducer;

export const selectAllCars = (state) => state.cars.data;
export const selectLoading = (state) => state.cars.loading;
export const selectPosting = (state) => state.cars.posting;
export const selectLoadingError = (state) => state.cars.loadingError;
export const selectPostingError = (state) => state.cars.postingError;
export const selectLoadingFailed = (state) => state.cars.loadingFailed;
export const selectPostingFailed = (state) => state.cars.postingFailed;