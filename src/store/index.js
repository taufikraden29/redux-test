import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/createSlice";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    userSlice: userSlice.reducer,
  },
});
export default store;
