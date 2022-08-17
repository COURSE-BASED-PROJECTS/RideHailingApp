import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    start: null,
    des: null,
    travelInformation: null,
    statusPackage: "Đang tìm tài xế...",
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
            state.travelInformation = {
                ...state.travelInformation,
                ...action.payload,
            };
        },
        setStatusPackage: (state, action) => {
            state.statusPackage = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setStart, setDes, setTravelInfomation, setStatusPackage } =
    travelSlice.actions;

export default travelSlice.reducer;
