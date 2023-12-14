import { createSlice } from "@reduxjs/toolkit"


const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increase: (state) => {
            return state += 1
        },
        decrease: (state) => {
            return state -= 1
        },
        multiply: (state, action) => {
            return state * action.payload
        }
    }
})



export const { increase, decrease, multiply } = counterSlice.actions

export default counterSlice.reducer;