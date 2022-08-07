import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    start: null,
    des: null,
    travelInformation: null,
};

export const travelSlice = createSlice({
    name: "travel",
    initialState,
    reducers: {
        setStart: (state, action) => {
            state.start = action.payload;
        },
        setDes: (state, action) => {
            state.des = action.payload;
        },
        setTravelInfomation: (state, action) => {
            console.log(action.payload);
            state.travelInformation = {
                ...state.travelInformation,
                ...action.payload,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setStart, setDes, setTravelInfomation } = travelSlice.actions;

export default travelSlice.reducer;
