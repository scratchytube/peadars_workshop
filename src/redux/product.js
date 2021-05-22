import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
       isSideBar: false,
    },
    reducers: {
        toggleSideBar: (state) => {
           state.isSidebar = !state.isSidebar 
        }
    }
})

export const { toggleSideBar } = productSlice.actions
export default productSlice.reducer