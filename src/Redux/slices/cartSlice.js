import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
  totalCount: 0,
};

const cartSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // const pizzaAction = { ...action.payload, count: 1 };
      const pizzaAction = action.payload;
      const existingItem = state.items.find(
        (e) =>
          e.id === pizzaAction.id &&
          e.type === pizzaAction.type &&
          e.size === pizzaAction.size
      );

      if (existingItem) {
        existingItem.count += 1;
        state.totalPrice += pizzaAction.price;
      } else {
        state.items.push(pizzaAction);
        state.totalPrice += pizzaAction.price;
      }
    },
    removeItem(state, action) {
      const pizzaAction = action.payload;

      const existingItem = state.items.find(
        (e) =>
          e.id === pizzaAction.id &&
          e.type === pizzaAction.type &&
          e.size === pizzaAction.size
      );
      if (existingItem) {
        existingItem.count -= 1;
        state.totalPrice -= pizzaAction.price;
        if (existingItem.count === 0) {
          state.items = state.items.filter(
            (item) =>
              item.id !== existingItem.id ||
              item.type !== existingItem.type ||
              item.size !== existingItem.size
          );
        }
      }
    },
    clearOneType(state, action) {
      const pizzaAction = action.payload;

      const existingItem = state.items.find(
        (e) =>
          e.id === pizzaAction.id &&
          e.type === pizzaAction.type &&
          e.size === pizzaAction.size
      );
      if (existingItem) {
        const prices = existingItem.count * pizzaAction.price;
        state.totalPrice -= prices;
        existingItem.count = 0;
        // state.totalPrice -= pizzaAction.price;
        if (existingItem.count === 0) {
          state.items = state.items.filter(
            (item) =>
              item.id !== existingItem.id ||
              item.type !== existingItem.type ||
              item.size !== existingItem.size
          );
        }
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    setScoreCount(state, action) {
      state.totalCount = action.payload;
    },
  },
});

export const selectCart = (state)=> state.cart

export const { addItem, removeItem, clearItems, setScoreCount, clearOneType } =
  cartSlices.actions;
export default cartSlices.reducer;
