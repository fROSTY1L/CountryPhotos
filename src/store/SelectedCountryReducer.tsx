import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    country: ''
}

const selectedCountrySlice = createSlice({
    name: 'selectedCountry',
    initialState,
    reducers: {
        setSelectedCountry: (state, action) => {
            state.country = action.payload
        },
    },
})

export const { setSelectedCountry } = selectedCountrySlice.actions;
export default selectedCountrySlice.reducer