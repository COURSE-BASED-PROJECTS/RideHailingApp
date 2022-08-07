import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchStart: "",
    searchDes: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchStart: (state, action) => {
            console.log(action.payload)
            state.searchStart = action.payload;
        },
        setSearchDes: (state, action) => {
            state.searchDes = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSearchStart, setSearchDes } = searchSlice.actions;

export default searchSlice.reducer;
