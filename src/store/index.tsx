import { configureStore } from "@reduxjs/toolkit";
import CollapseReducer from "./CollapseReducer";
import SelectedCountryReducer from "./SelectedCountryReducer";
import InputCountryReducer from "./InputCountryReducer";
import PageReducer from "./PageReducer";
import NumberOfPagesReducer from "./NumberOfPagesReducer";
import SelectedPhotoReducer from "./SelectedPhotoReducer";
import DownloadReducer from "./DownloadReducer";

export const store = configureStore({
    reducer: {
        collapse: CollapseReducer,
        selectedCountry: SelectedCountryReducer,
        inputCountry: InputCountryReducer,
        page: PageReducer,
        numberOfPages: NumberOfPagesReducer,
        selectedPhoto: SelectedPhotoReducer,
        downloadResolution: DownloadReducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>;