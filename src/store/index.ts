import { configureStore } from "@reduxjs/toolkit";
import { webApi } from "../services/webApi";

export const store = configureStore({
    reducer: {
        [webApi.reducerPath]: webApi.reducer
    },
})
