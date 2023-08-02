import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  searchValue: [],
  notFound: false,
};

const gistSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGist(state, action) {
      state.value = [...action.payload];
    },
    setSearch(state, action) {
      state.searchValue = [...action.payload];
    },
    notFound(state, action) {
      state.notFound = action.payload;
    },
  },
});

export const { setGist, setSearch, notFound } = gistSlice.actions;
export default gistSlice;
