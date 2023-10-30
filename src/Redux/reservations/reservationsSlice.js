import { createSlice } from "@reduxjs/toolkit";


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
});

export default reservationsSlice.reducer;