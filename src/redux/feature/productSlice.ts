import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  filters: {
    category: "",
    brand: "",
    price: "",
    rating: "",
  },
  sort: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setSearch, setFilters, clearFilters, setSort } =
  productSlice.actions;
export default productSlice.reducer;
