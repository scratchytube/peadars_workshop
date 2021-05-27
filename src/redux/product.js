import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
       isSideBar: false,
       productsLoading: false,
       productsError: false,
       products: [],
       featuredProducts: [],
       singleProductLoading: false,
       singleProductError: false,
       singleProduct: {},
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
        },
        singleProduct(state, action) {
            state.singleProduct = action.payload
            
            
        }
    }
})

export const { toggleSideBar, productsFetch, featuredProductsFetch, singleProduct } = productSlice.actions
export default productSlice.reducer