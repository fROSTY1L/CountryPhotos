import { configureStore } from "@reduxjs/toolkit";
import CollapseReducer from "./CollapseReducer";
import SelectedCountryReducer from "./SelectedCountryReducer";

export const store = configureStore({
    reducer: {
        collapse: CollapseReducer,
        selectedCountry: SelectedCountryReducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>;