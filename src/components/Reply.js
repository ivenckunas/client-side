import axios from 'axios';
import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function Reply() {

  const { id } = useParams()

  const replyToPost = useSelector(state => state.generalSlice.replyArr[id])
  const currentUser = useSelector(state => state.generalSlice.currentUser)
  const currentTopicId = useSelector(state => state.generalSlice.currentTopicId)
  const postReplies = replyToPost.replies

  const replyRef = useRef()

  const handleReply = () => {
    const replyObj = {
      replyAuthor: currentUser.join("@"),
      replyMessage: replyRef.current.value,
      replyPostId: id,
      replyTopic: currentTopicId,
    }
    axios.post(`http://localhost:4000/topic/reply`, replyObj)
  }

  return (
    <div className='container'>
      <h1>reply to:</h1>
      <div className="singleTopic" key={id}>
        <small>by: {replyToPost.author}</small>
        <h3>{replyToPost.title}</h3>
        <p>{replyToPost.message}</p>
      </div>
      <div className="replies">
        {postReplies && postReplies.length > 0 && postReplies.map((reply, i) => {
          return <div className='oldReplies' key={i}>
            <p>{reply.author}</p>
            <p>{reply.reply}</p>
          </div>
        })}
      </div>
      <div className="reply">
        <textarea ref={replyRef} name="" id="" cols="30" rows="5"></textarea>
        <button onClick={handleReply}>reply</button>
      </div>
    </div>
  )
}

export default Reply