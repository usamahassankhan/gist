import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gistSlice from "./gistSlice";

const reducer = combineReducers({
  user: gistSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
