import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/product'

const store = configureStore({
    reducer: {
        product: productReducer
    }
})

export default store