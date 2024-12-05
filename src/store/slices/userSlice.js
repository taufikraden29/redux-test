import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: ["Udin"],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export function fetchUsers() {
  return (dispatch, getState) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(setUsers(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
