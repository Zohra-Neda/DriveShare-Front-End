import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./cars/carsSlice";
import reservationsSlice from "./reservations/reservationsSlice";
import citySlice from "./cities/citySlice";
import loginSlice from "./login/loginSlice";

const store = configureStore({
    reducer: {
        login: loginSlice,
        cars: carsSlice,
        city: citySlice,
        reservationsSlice: reservationsSlice
    },
})

export default store;