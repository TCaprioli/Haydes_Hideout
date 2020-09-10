
import { configureStore } from '@reduxjs/toolkit'
import { navCountSlice } from './navbar/reducers/cartCount'
import { inputSlice } from './navbar/reducers/inputSlice'


export const store = configureStore({
  reducer: {
    counter: navCountSlice.reducer,
    input: inputSlice.reducer
  }
})

