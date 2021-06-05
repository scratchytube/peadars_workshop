import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
       isSideBar: false,
       isGridView: true,
       sort: 'name-a',
    //    productsLoading: false,
    //    productsError: false,
       products: [],
       filtered_products: [],
       featuredProducts: [],
    //    singleProductLoading: false,
    //    singleProductError: false,
       singleProduct: {},
       filters:{
           text: '',
           category: 'all',
           min_price: 0,
           max_price: 0,
           price: 0,
       }
    },
    reducers: {
        toggleSideBar(state) {
            state.isSideBar = !state.isSideBar 
        },
        toggleView(state) {
            state.isGridView = !state.isGridView
        },
        sorter(state, action) {
            state.sort = action.payload
        },
        allProducts(state, action) {
            let maxPrice = action.payload.map((p) => p.price)
            maxPrice = Math.max(...maxPrice)
            state.filters.max_price = maxPrice
            state.filters.price = maxPrice
            state.products = action.payload
            // state.productsLoading = true
        },
        filteredProducts(state, action) {
            let maxPrice = action.payload.map((p) => p.price)
            maxPrice = Math.max(...maxPrice)
            state.filters.max_price = maxPrice
            state.filters.price = maxPrice
            state.filtered_products = action.payload
        },
        updateFilters(state, action) {
           
            const { name, value } = action.payload
            state.filters[name] = value
            // return {...state,filters:{...state.filters,[name]: value}}
        },
        clearFilters(state) {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text:'',
                    category: 'all',
                    price: state.filters.max_price,
                }
            }
        },
        featuredProductsFetch(state, action) {
            state.featuredProducts = action.payload.filter((product) => product.featured === true)
        },
        singleProduct(state, action) {
            state.singleProduct = action.payload
        }
    }
})

export const { 
    toggleSideBar, 
    allProducts, 
    filteredProducts, 
    featuredProductsFetch, 
    singleProduct, 
    toggleView, 
    sorter,
    updateFilters,
    clearFilters,
} = productSlice.actions
export default productSlice.reducer