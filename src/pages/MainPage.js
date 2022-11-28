import React from 'react'
import { useSelector } from 'react-redux'
import ForumMain from '../components/ForumMain';
import Login from '../components/Login';
import Register from '../components/Register';

function MainPage() {

  const loggedIn = useSelector(state => state.generalSlice.loggedIn)
  console.log('loggedIn ===', loggedIn);

  return (
    <div>
      {loggedIn ? <ForumMain /> : <div><Login />
        <Register /> </div>}

    </div>
  )
}

export default MainPage