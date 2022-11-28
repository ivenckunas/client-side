import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: 'generalSlice',
  initialState: {
    loggedIn: false
  },

  reducers: {
    login: (state, action) => {
      console.log('action.payload ===', action.payload);
      state.loggedIn = action.payload
    }
  }
})

export const { login } = generalSlice.actions

export default generalSlice.reducer