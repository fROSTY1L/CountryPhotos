import { createSlice } from "@reduxjs/toolkit"

interface Resolution {
    resolution: 'origin' | 'medium' | 'large' | 'small'
}
const initialState = {
    resolution: ''
}

const downloadResolutionSlice = createSlice({
    name: 'downloadResolution',
    initialState,
    reducers: {
        setDownloadResolution: (state, action) => {
            state.resolution = action.payload
        },
    },
})

export const { setDownloadResolution } = downloadResolutionSlice.actions;
export default downloadResolutionSlice.reducer