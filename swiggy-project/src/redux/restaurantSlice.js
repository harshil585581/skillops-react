import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    filterRestaurants: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { filterRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;