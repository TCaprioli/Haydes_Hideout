  
// import { createStore,applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { navCountSlice } from './navbar/reducers/cartCount'
import { inputSlice } from './navbar/reducers/inputSlice'


// export function configureStore(){
//   return createStore(
//     rootReducer,applyMiddleware(thunk),
//   );
// }

export const store = configureStore({
  reducer: {
    counter: navCountSlice.reducer,
    input: inputSlice.reducer
  }
})

