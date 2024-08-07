import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    country: ''
}

const inputCountrySlice = createSlice({
    name: 'inputCountry',
    initialState,
    reducers: {
        setInputCountry: (state, action) => {
            state.country = action.payload
        },
    },
})

export const { setInputCountry } = inputCountrySlice.actions;
export default inputCountrySlice.reducer