import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice.js";
import authApi from "./features/auth/authApi.js";
import authReducer from "./features/auth/authSlice.js";
import productsApi from "./features/products/productsApi.js";
import reviewApi from "./features/reviews/reviewsApi.js";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [authApi.reducerPath]: authApi.reducer,
        auth:authReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [reviewApi.reducerPath] : reviewApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware,productsApi.middleware,reviewApi.middleware),
});
