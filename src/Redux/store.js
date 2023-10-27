import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./cars/carsSlice";

const store = configureStore({
    reducer: {
        cars: carsSlice,
    },
})

export default store;