import { configureStore } from "@reduxjs/toolkit";
import CollapseReducer from "./CollapseReducer";
import SelectedCountryReducer from "./SelectedCountryReducer";
import InputCountryReducer from "./InputCountryReducer";

export const store = configureStore({
    reducer: {
        collapse: CollapseReducer,
        selectedCountry: SelectedCountryReducer,
        inputCountry: InputCountryReducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>;