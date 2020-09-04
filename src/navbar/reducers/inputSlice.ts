import { createSlice } from '@reduxjs/toolkit'

export const inputSlice = createSlice({
  name: 'searchInput',
  initialState: '',
  reducers: {
    input(state,action){
      return state = action.payload
    }
    
  }
})