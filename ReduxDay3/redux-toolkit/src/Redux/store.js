
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Redux/Features/Counter/counterSlice"
import cartReducer from "../Redux/Features/Cart/cartSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
})