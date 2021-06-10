import { createSlice } from '@reduxjs/toolkit'

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        counter: 0
    },
    reducers: {
        increment(state) {
            state.counter = state.counter + 1
        },
        decrement(state) {
            state.counter = state.counter - 1
        },
    }
})

export const {increment, decrement} = toolkitSlice.actions
export default toolkitSlice.reducer

