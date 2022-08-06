import { configureStore } from "@reduxjs/toolkit";
import travelSlice from "../store/reducer/travelSlice";
import accountSlice from "../store/reducer/accountSlice";

export const store = configureStore({
    reducer: {
        travel: travelSlice,
        account: accountSlice,
    },
});
