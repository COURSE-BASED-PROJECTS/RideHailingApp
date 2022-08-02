import { configureStore } from "@reduxjs/toolkit";
import travelSlice from "../screens/Home/travelSlice";
import accountSlice from "../screens/Login/accountSlice";

export const store = configureStore({
    reducer: {
        travel: travelSlice,
        account: accountSlice,
    },
});
