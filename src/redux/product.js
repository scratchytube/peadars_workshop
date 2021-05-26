import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
       isSideBar: false,
       productsLoading: false,
       productsError: false,
       products: [],
       featuredProducts: [],
    },
    reducers: {
        toggleSideBar(state) {
            state.isSideBar = !state.isSideBar 
        },
        productsFetch(state, action) {
            state.items = action.payload
            // state.productsLoading = true
        },
        featuredProductsFetch(state, action) {
            state.featuredProducts = action.payload.filter((product) => product.featured === true)
        }
    }
})

export const { toggleSideBar, productsFetch, featuredProductsFetch } = productSlice.actions
export default productSlice.reducer