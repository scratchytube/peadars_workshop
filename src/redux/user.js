import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        currentUser(state, action) {
            state.user = action.payload
        }
    }
})


export const { currentUser } = userSlice.actions
export default userSlice.reducer
