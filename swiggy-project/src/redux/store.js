import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    cart: cartReducer,
  },
});

export default store;