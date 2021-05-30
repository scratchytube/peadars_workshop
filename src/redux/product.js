import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
       isSideBar: false,
    //    productsLoading: false,
    //    productsError: false,
       products: [],
       filtered_products: [],
       featuredProducts: [],
    //    singleProductLoading: false,
    //    singleProductError: false,
       singleProduct: {},
    },
    reducers: {
        toggleSideBar(state) {
            state.isSideBar = !state.isSideBar 
        },
        allProducts(state, action) {
            state.products = action.payload
            // state.productsLoading = true
        },
        filteredProducts(state, action) {
            state.filtered_products = action.payload
        },
        featuredProductsFetch(state, action) {
            state.featuredProducts = action.payload.filter((product) => product.featured === true)
        },
        singleProduct(state, action) {
            state.singleProduct = action.payload
            
            
        }
    }
})

export const { toggleSideBar, allProducts, filteredProducts, featuredProductsFetch, singleProduct } = productSlice.actions
export default productSlice.reducer