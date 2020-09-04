import { combineReducers } from 'redux';
import { navCountSlice } from './navbar/reducers/cartCount'

export default combineReducers({
  //add reducers below
  counter: navCountSlice.reducer
})