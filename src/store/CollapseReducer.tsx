import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    collapse: false
}

const collapseSlice = createSlice({
    name: 'collapse',
    initialState,
    reducers: {
        setCollapse: (state, action) => {
            state.collapse = action.payload
        },
    },
})

export const { setCollapse } = collapseSlice.actions;
export default collapseSlice.reducer