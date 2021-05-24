import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
       isSideBar: true,
    },
    reducers: {
        toggleSideBar(state) {
            state.isSideBar = !state.isSideBar 
        }
    }
})

export const { toggleSideBar } = productSlice.actions
export default productSlice.reducer