import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 99,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
      console.log(state, "<<<<<< state");
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    addByAmount: (state, action) => {
      state.counter += action.payload;
      //   console.log("Tambahkan Akuh", action);
    },
  }, //Menyimpan function" yang akan berubah
});
export const { increment, decrement, addByAmount } = counterSlice.actions;
// console.log(counterSlice, "<<<<<< counterSlice");
