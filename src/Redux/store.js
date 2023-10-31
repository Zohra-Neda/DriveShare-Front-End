import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./cars/carsSlice";
import citySlice from "./cities/citySlice";

const store = configureStore({
    reducer: {
        cars: carsSlice,
        city: citySlice,
    },
})

export default store;