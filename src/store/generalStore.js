import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: 'generalSlice',
  initialState: {
    loggedIn: false,
    errorMsg: '',
    topics: null,
    currentTopicId: null,
    currentUser: '',
    userProfileImage: null,
    usersArr: null,
    replyArr: null
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
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.split('@')
    },
    setUserProfileImage: (state, action) => {
      state.userProfileImage = action.payload
    },
    setLeaderboard: (state, action) => {
      const usersArr = action.payload
      state.usersArr = usersArr
    },
    setReplyArr: (state, action) => {
      state.replyArr = action.payload
    }
  }
})

export const { login, setErrorMsg, setTopics, setCurrentTopicId, setCurrentUser, setUserProfileImage, setLeaderboard, setReplyArr } = generalSlice.actions

export default generalSlice.reducer