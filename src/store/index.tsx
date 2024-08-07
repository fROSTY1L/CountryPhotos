import { configureStore } from "@reduxjs/toolkit";
import CollapseReducer from "./CollapseReducer";

export const store = configureStore({
    reducer: {
        collapse: CollapseReducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>;