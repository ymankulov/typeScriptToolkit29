import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/UserSlice";
import ProductSlice from "./reducers/ProductSlice";

const rootReducer = combineReducers({
  useSlice: UserSlice,
  proSlice: ProductSlice
});
export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
type AppStore = ReturnType<typeof setUpStore>;
export type rootReducer = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
