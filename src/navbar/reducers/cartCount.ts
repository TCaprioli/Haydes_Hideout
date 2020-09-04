import { createSlice } from '@reduxjs/toolkit'

 export const navCountSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    reset: state => state = 0
  }
})