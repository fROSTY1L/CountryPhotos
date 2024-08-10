import { createSlice } from "@reduxjs/toolkit"

interface Countries {
    countries: string[]
}
const initialState: Countries = {
    countries: []
}

const collapseSlice = createSlice({
    name: 'collapse',
    initialState,
    reducers: {
        setCollapse: (state, action) => {
            state.countries = action.payload
        },
    },
})

export const { setCollapse } = collapseSlice.actions;
export default collapseSlice.reducer