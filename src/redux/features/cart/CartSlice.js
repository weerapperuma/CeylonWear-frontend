import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.05,
    grandTotal: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.products.find((product) => product.id === action.payload.id);

            if (!isExist) {
                state.products.push({ ...action.payload, quantity: 1 });
            } else {
                console.log("Item already added");
            }

            // Update state values after adding a product
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);
        }
    }
});

// Utility Functions
const setSelectedItems = (state) =>
    state.products.reduce((total, product) => total + product.quantity, 0);

const setTotalPrice = (state) =>
    state.products.reduce((total, product) => total + product.quantity * product.price, 0);

const setTax = (state) => setTotalPrice(state) * state.taxRate;

const setGrandTotal = (state) => setTotalPrice(state) + setTax(state);

// Export actions and reducer
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
