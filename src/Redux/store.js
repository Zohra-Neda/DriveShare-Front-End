import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./cars/carsSlice";
import reservationsSlice from "./reservations/reservationsSlice";

const store = configureStore({
    reducer: {
        cars: carsSlice,
        reservationsSlice: reservationsSlice
    },
})

export default store;