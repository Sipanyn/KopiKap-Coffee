import { configureStore, combineReducers } from "@reduxjs/toolkit";
import coffeeReducer from "./CoffeeSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Correct spelling
    }),
});
// export const store = configureStore({
//   reducer: persistedReducer,
// });

export const persistor = persistStore(store);
