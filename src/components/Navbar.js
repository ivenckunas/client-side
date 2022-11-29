import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {


  const nav = useNavigate()


  const handleLogout = () => {
    console.log('logout')
  }

  const handleUserProfile = () => {
    nav('/profile')
  }

  const handleLeaderboard = () => {
    nav('/leaderboard')
  }

  return (
    <div>
      <button onClick={handleUserProfile}>User Profile</button>
      <button onClick={handleLeaderboard}>Leaderboard</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Navbar