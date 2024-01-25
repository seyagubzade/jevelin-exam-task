import { configureStore } from '@reduxjs/toolkit'
import { prodsReducer } from './prods/prodsSlice'
import { wishlistReducer } from './wishlist/wishlistSlice';
import { basketReducer } from './basket/basketSlice';

const store = configureStore({
  reducer: {
    prods: prodsReducer,
    wishlist: wishlistReducer,
    basket: basketReducer
  },
})

export default store;