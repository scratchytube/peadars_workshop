import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/product'
import cartReducer from '../redux/cart'
import userReducer from '../redux/user'

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        user: userReducer
    }
})

export default store