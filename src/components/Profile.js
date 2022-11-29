import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

function Profile() {

  const username = useSelector(state => state.generalSlice.currentUser[0])

  const userProfileImage = useSelector(state => state.generalSlice.userProfileImage)
  const user = useSelector(state => state.generalSlice.currentUser)

  const imageFileRef = useRef()

  const handlePhotoChange = () => {
    const updateImage = {
      image: imageFileRef.current.value,
      userEmail: user.join('@')
    }

    axios.post('http://localhost:4000/change-profile-pic', updateImage)
  }

  return (
    <div className='container profile'>
      <h2>Profile: {username}</h2>
      <img className='profilePic' src={userProfileImage} alt="" />
      <input ref={imageFileRef} type="url" placeholder='image url...' />
      <button onClick={handlePhotoChange}>change picture</button>
    </div>
  )
}

export default Profile