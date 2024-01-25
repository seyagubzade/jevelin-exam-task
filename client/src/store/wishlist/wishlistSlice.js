// wishlistSlice

import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      let newArr = JSON.parse(JSON.stringify(state.wishlist));
      const target = newArr.find((item) => item._id == action.payload._id);

      if (target) {
        toast.error("Already exists in your wishlist");
      } else {
        newArr = [...newArr, action.payload];
        state.wishlist = newArr;
        toast.success("Added to your wishlist");
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
    removeFromWishlist: (state, action) => {
      let newArr = JSON.parse(JSON.stringify(state.wishlist));
      const target = newArr.find((item) => item._id == action.payload);
      const indexOfTarget = newArr.indexOf(target);
      newArr.splice(indexOfTarget, 1);
      state.wishlist = newArr;
      toast.success("Item removed from your wishlist");
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addItemToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
