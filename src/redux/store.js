import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filtersSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['campers'],
};

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
