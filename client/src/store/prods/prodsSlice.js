import { createSlice } from "@reduxjs/toolkit";
import { AddNew, DeleteById, GetAll, GetById } from "./api_actions";
import toast from "react-hot-toast";

const initialState = {
  data: [],
  loading: false,
  error: null,
  currentData: null,
};

const prodsSlice = createSlice({
  name: "prodsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GetAll
      .addCase(GetAll.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(GetAll.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetAll.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // GetById
      .addCase(GetById.fulfilled, (state, action) => {
        state.currentData = action.payload;
        state.loading = false;
      })
      .addCase(GetById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // DeleteById
      .addCase(DeleteById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        toast.success("Item deleted");
      })
      .addCase(DeleteById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(DeleteById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error("error occured");
      })

      // AddNew
      .addCase(AddNew.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
        state.loading = false;
        toast.success("Item added");
      })
      .addCase(AddNew.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddNew.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const prodsReducer = prodsSlice.reducer;
