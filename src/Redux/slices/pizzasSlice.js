import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, pagination } = params;
    const { data } = await axios.get(
      `https://66edb19a380821644cddba54.mockapi.io/items?page=${pagination}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`
    );

    return data;
  }
);

const initialState = {
  pizzas: [],
  status: "",
};

const pizzasSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.pizzas = [];
      state.status = "loading";
      console.log("Загрузка");
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = "success";
      console.log("Все ок");
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.pizzas = [];
      state.status = "error";
      console.log("Ошибка");
    });
  },
});

export const selectPizzas = (state) => state.pizzas;

export const { setPizzas } = pizzasSlice.actions;
export default pizzasSlice.reducer;
