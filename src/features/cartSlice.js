import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItemsCount: 0,
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        addCartItem: (state, data) => {
            console.log(data.payload)
            state.cartItemsCount += data.payload;
        },
        addThisItem: (state) => {
            state.cartItems.push('Item 1')
        }
    }

})

export const { addCartItem, addThisItem } = cartSlice.actions;
export default cartSlice.reducer;