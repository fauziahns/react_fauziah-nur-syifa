import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: "",
        selectProduct: "",
        file: "",
        fresh: "",
        description: "",
        price: ""
    },
    reducers:{
        update: (state, action) => {
            state.data = action.payload.data
            state.selectProduct = action.payload.selectProduct
            state.file = action.payload.file
            state.fresh = action.payload.fresh
            state.description = action.payload.description
            state.price = action.payload.price
        }
    }
})

export const {update} = productSlice.actions
export default productSlice.reducer