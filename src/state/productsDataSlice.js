import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data/productsData.js";

const initialState = {
  originalData: productsData,
};

const productsDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default productsDataSlice.reducer;
