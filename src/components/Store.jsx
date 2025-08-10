import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./CoffeeSlice";
export const Store = configureStore({ reducer: { coffee: coffeeReducer } });
