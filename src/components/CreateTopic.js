import axios from 'axios'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

function CreateTopic() {

  const { id } = useParams();
  const discussion = useSelector((state) => state.generalSlice.topics[id]);
  const currentTopicId = useSelector(state => state.generalSlice.currentTopicId._id)
  const authorName = useSelector(state => state.generalSlice.currentUser[0])
  const fullAuthorName = useSelector(state => state.generalSlice.currentUser)
  const titleRef = useRef()
  const textareaRef = useRef()
  const nav = useNavigate()

  const handleCreateNewDiscussion = () => {

    const newDiscussion = {
      topic: currentTopicId,
      title: titleRef.current.value,
      message: textareaRef.current.value,
      author: authorName,
      fullName: fullAuthorName.join("@")
    }

    axios.post('http://localhost:4000/new-discussion', newDiscussion).then(function (resp) {
      if (resp.data.error === false) {
        nav('/')
      }
    })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className='container'>
      <h1>Create new discussion in {discussion.discussion}</h1>
      <input ref={titleRef} type="text" placeholder='title' />
      <textarea ref={textareaRef} name="" id="" cols="30" rows="10" placeholder='your message'></textarea>
      <button onClick={handleCreateNewDiscussion}>create discussion</button>
    </div>
  )
}

export default CreateTopic