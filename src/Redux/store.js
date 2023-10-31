import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./cars/carsSlice";
import reservationsSlice from "./reservations/reservationsSlice";
import citySlice from "./cities/citySlice";

const store = configureStore({
    reducer: {
        cars: carsSlice,
        reservationsSlice: reservationsSlice
        city: citySlice,
    },
})

export default store;