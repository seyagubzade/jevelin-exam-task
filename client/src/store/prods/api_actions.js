import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = `http://localhost:8080/jevelin`;

export const GetAll = createAsyncThunk("GetAll", async (_, thunkAPI) => {
  try {
    console.log("response>>>>")
    const response = await axios.get(`http://localhost:8080/jevelin`);
    console.log(response)
    return response.data;
  } catch (err) {
    console.log(err)
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const GetById = createAsyncThunk("GetById", async (id , thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const DeleteById = createAsyncThunk(
  "DeleteById",
  async (id , thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      console.log(response)
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const AddNew = createAsyncThunk(
  "AddNew",
  async ({ title, subTitle, desc, model, price, image }, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, {
        title,
        subTitle,
        desc,
        model,
        price,
        image,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
