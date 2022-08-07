import { configureStore } from "@reduxjs/toolkit";
import travelSlice from "./reducer/travelSlice";
import accountSlice from "./reducer/accountSlice";
import searchSlice from "./reducer/searchSlice";

export const store = configureStore({
    reducer: {
        travel: travelSlice,
        account: accountSlice,
        search: searchSlice,
    },
});
