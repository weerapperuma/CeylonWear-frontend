import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice.js";
import authApi from "./features/auth/authApi.js";
import authReducer from "./features/auth/authSlice.js";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [authApi.reducerPath]: authApi.reducer,
        auth:authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});
