import React from 'react'
import { useSelector } from 'react-redux'

function LeaderBoard() {

  const usersArr = useSelector(state => state.generalSlice.usersArr)

  return (
    <div className='container'>
      <h2>LeaderBoard</h2>
      {usersArr.map((user, i) => {
        return <p key={i}>name: {user.email} <br /> messages: {user.messages} </p>
      })}

    </div>
  )
}

export default LeaderBoard