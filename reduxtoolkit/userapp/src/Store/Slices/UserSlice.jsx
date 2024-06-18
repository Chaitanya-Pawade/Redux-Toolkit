import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload)
      console.log(action.payload);
    },
    removeUser(state, action) {
     state.splice(action.payload,1)
    },
    deleteAllUsers(state, action) {
      // console.log("Hi...");
      return  [];

    },
  },

  extraReducers(builder) {
    builder.addCase(userSlice.actions.removeUser , () => {
      // console.log("this is extrareduces");
    })
  }

});

// console.log(userSlice.actions);

export default userSlice.reducer ;
export const { addUser , removeUser , deleteAllUsers } = userSlice.actions;