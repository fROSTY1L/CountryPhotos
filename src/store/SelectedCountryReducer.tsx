import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountriesState {
  selectedCountry: string;
  countries: string[];
}

const initialState: CountriesState = {
  selectedCountry: 'Angola',
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setSelectedCountry(state, action: PayloadAction<string>) {
      state.selectedCountry = action.payload;
    },
    addCountry(state, action: PayloadAction<string>) {
      if (!state.countries.includes(action.payload)) {
        state.countries.push(action.payload);
      }
    },
  },
});

export const { setSelectedCountry, addCountry } = countriesSlice.actions;
export default countriesSlice.reducer;