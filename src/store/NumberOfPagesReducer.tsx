import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numberOfPages: 0
}

const numberOfPagesSlice = createSlice({
    name: 'numberOfPages',
    initialState,
    reducers: {
        setNumberOfPages: (state, action) => {
            state.numberOfPages = action.payload
        }
    },
})

export const { setNumberOfPages } = numberOfPagesSlice.actions;
export default numberOfPagesSlice.reducer