import { createSlice } from "@reduxjs/toolkit"
import { Page } from "../types/types";

const initialState: Page = {
    page: 1,
    numberOfPages: 0
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        
        
    },
})

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer