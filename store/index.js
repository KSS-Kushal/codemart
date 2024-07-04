import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import AuthReducer from "./reducers/auth";
import CartReducer from "./reducers/cart";


const reducers = combineReducers({
    auth: AuthReducer,
    cart: CartReducer
},);

 
const persistConfig = {
    key: "codemart",
    storage,
    whitelist: ["auth"],
  };
  
  const persistedReducer = persistReducer(persistConfig, reducers);
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export const persistor = persistStore(store);
  export default store;
  