import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
    userInfo: "",
};

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUsername, setPassword, setUserInfo } = accountSlice.actions;

export default accountSlice.reducer;
