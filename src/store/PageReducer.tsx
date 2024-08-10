import { createSlice } from "@reduxjs/toolkit"

interface Page {
    page: number
}
const initialState: Page = {
    page: 1
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