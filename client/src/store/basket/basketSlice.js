import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  loading: false,
  error: null,
};

const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    addItemTobasket: (state, action) => {
      let newArr = JSON.parse(JSON.stringify(state.basket));
      const target = newArr.find((item) => item._id == action.payload._id);

      if (target) {
        toast.error("Already exists in your basket");
      } else {
        newArr = [
          ...newArr,
          { ...action.payload, count: 1, totalPrice: action.payload.price },
        ];
        state.basket = newArr;
        toast.success("Added to your basket");
        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
    removeFrombasket: (state, action) => {
      let newArr = JSON.parse(JSON.stringify(state.basket));
      const target = newArr.find((item) => item._id == action.payload);
      const indexOfTarget = newArr.indexOf(target);
      newArr.splice(indexOfTarget, 1);
      state.basket = newArr;
      toast.success("Item removed from your basket");
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    increaseAmount: (state, action) => {
      let newArr = JSON.parse(JSON.stringify(state.basket));
      const target = newArr.find((item) => item._id == action.payload);
      const indexOfTarget = newArr.indexOf(target);
      //   if(newArr[indexOfTarget])
      newArr[indexOfTarget] = {
        ...newArr[indexOfTarget],
        count: newArr[indexOfTarget].count + 1,
        totalPrice:
          newArr[indexOfTarget].price * (newArr[indexOfTarget].count + 1),
      };
      state.basket = newArr;
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    decreaseAmount: (state, action) => {
      let newArr = JSON.parse(JSON.stringify(state.basket));
      const target = newArr.find((item) => item._id == action.payload);
      const indexOfTarget = newArr.indexOf(target);
      if (newArr[indexOfTarget].count > 1) {
        newArr[indexOfTarget] = {
          ...newArr[indexOfTarget],
          count: newArr[indexOfTarget].count - 1,
          totalPrice:
            (newArr[indexOfTarget].count - 1) * newArr[indexOfTarget].price,
        };
      } else {
        newArr.splice(indexOfTarget, 1);
        toast.success("Item removed from your basket");
      }
      state.basket = newArr;

      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const {
  addItemTobasket,
  removeFrombasket,
  increaseAmount,
  decreaseAmount,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
