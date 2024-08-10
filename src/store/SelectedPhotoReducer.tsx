import { createSlice } from "@reduxjs/toolkit"

interface PhotoUrl {
    url: string;
}

const initialState: PhotoUrl = {
    url: ''
}

const selectedPhotoSlice = createSlice({
    name: 'selectedPhoto',
    initialState,
    reducers: {
        setSelectedPhoto: (state, action) => {
            state.url = action.payload
        }
    }
})

export const { setSelectedPhoto } = selectedPhotoSlice.actions;
export default selectedPhotoSlice.reducer