import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: 'generalSlice',
  initialState: {
    loggedIn: false,
    errorMsg: '',
    topics: null,
    currentTopicId: null
  },

  reducers: {
    login: (state, action) => {
      state.loggedIn = action.payload
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload
    },
    setTopics: (state, action) => {
      state.topics = action.payload
    },
    setCurrentTopicId: (state, action) => {
      state.currentTopicId = action.payload
    }
  }
})

export const { login, setErrorMsg, setTopics, setCurrentTopicId } = generalSlice.actions

export default generalSlice.reducer