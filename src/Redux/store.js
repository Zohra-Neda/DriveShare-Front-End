import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./cars/carsSlice";
import reservationsSlice from "./reservations/reservationsSlice";
import citySlice from "./cities/citySlice";

const store = configureStore({
    reducer: {
        cars: carsSlice,
        city: citySlice,
        reservations: reservationsSlice
    },
})

export default store;