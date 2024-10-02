import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  searchValue: "",
  pagination: 1,
  sort: {
    name: "популярности↑",
    sortProperty: "rating",
  },
  categories: [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortId(state, action) {
      state.sort = action.payload;
    },
    setPagination(state, action) {
      state.pagination = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.pagination = Number(action.payload.pagination);
      state.sort = action.payload.sort;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setSortId,
  setPagination,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
