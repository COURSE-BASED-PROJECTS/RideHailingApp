import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
    userInfo: {},
    registerInfo: {},
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
        setRegisterInfo: (state, action) => {
            const key = action.payload.type;
            const val = action.payload.newText;
            state.registerInfo = { ...state.registerInfo, [key]: val };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUsername, setPassword, setUserInfo, setRegisterInfo } =
    accountSlice.actions;

export default accountSlice.reducer;
