import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Actions'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})