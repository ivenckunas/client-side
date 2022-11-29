import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ForumMain from '../components/ForumMain';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Register from '../components/Register';

function MainPage() {

  const loggedIn = useSelector(state => state.generalSlice.loggedIn)
  const errorMsg = useSelector(state => state.generalSlice.errorMsg)

  return (
    <div className='container'>
      {loggedIn ?
        <div>
          <Navbar />
          <ForumMain />
        </div>
        :
        <div className='auth'>
          <Login />
          <Register />
        </div>}
      {loggedIn ? '' : <div className='errorMsg'>{errorMsg}</div>}
    </div>
  )
}

export default MainPage