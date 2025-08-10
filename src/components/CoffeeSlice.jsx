import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: null,
  favProducts: [],
  addedProducts: [],
  totalPrice: 0,
};
const CoffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    addToFavorites: (state, action) => {
      state.allProducts.map((item) => {
        if (item.id === action.payload.id) {
          if (item.fav === false) {
            item.fav = true;
            state.favProducts.push(item);
          } else if (item.fav === true) {
            item.fav = false;
            state.favProducts = state.favProducts.filter((favitem) => {
              return favitem.id !== item.id;
            });
          }
        }
      });
    },
    removeFromFavorites: (state, action) => {
      state.favProducts = state.favProducts.filter((favitem) => {
        return favitem.id !== action.payload.id;
      });
      state.allProducts.map((item) => {
        if (item.id === action.payload.id) {
          item.fav = false;
        }
      });
    },
    addToBasket: (state, action) => {
      state.allProducts.map((item) => {
        if (item.id === action.payload.id) {
          if (item.added === false) {
            item.added = true;
            state.addedProducts.push(item);
          } else if (item.added === true) {
            item.added = false;
            state.addedProducts = state.addedProducts.filter((favitem) => {
              return favitem.id !== item.id;
            });
          }
        }
      });
    },
    removeFromBasket: (state, action) => {
      state.addedProducts = state.addedProducts.filter((addeditem) => {
        return addeditem.id !== action.payload.id;
      });
      state.allProducts.map((item) => {
        if (item.id === action.payload.id) {
          item.added = false;
        }
      });
    },
    calTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    increaseCountfun: (state, action) => {
      state.totalPrice += action.payload.item.price;
      state.addedProducts.map((item) => {
        if (item.id === action.payload.item.id) {
          item.count = action.payload.countRef.current;
        }
      });

      // state.totalPrice += action.payload;
    },
    decreaseCount: (state, action) => {
      console.log(action.payload);
      state.totalPrice -= action.payload.item.price;
      // state.totalPrice -= action.payload;
    },
  },
});

export default CoffeeSlice.reducer;
export const {
  addAllProducts,
  addToFavorites,
  removeFromFavorites,
  addToBasket,
  removeFromBasket,
  calTotalPrice,
  increaseCountfun,
  decreaseCount,
} = CoffeeSlice.actions;
