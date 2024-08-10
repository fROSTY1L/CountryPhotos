import { configureStore } from "@reduxjs/toolkit";
import CollapseReducer from "./CollapseReducer";
import SelectedCountryReducer from "./SelectedCountryReducer";
import InputCountryReducer from "./InputCountryReducer";
import PageReducer from "./PageReducer";

export const store = configureStore({
    reducer: {
        collapse: CollapseReducer,
        selectedCountry: SelectedCountryReducer,
        inputCountry: InputCountryReducer,
        page: PageReducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>;