
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Redux/Features/Counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})