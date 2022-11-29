import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SingleTopic({ topic, index }) {

  const topics = useSelector(state => state.generalSlice.topics)

  const nav = useNavigate()

  const go = () => {
    nav(`/topic/${index}`)
  }

  return (
    <div onClick={go} className='singleTopic'>
      <h2>{topic.discussion}</h2>
      <p>discussions: {topics[index].topics.length}</p>

    </div>
  )
}

export default SingleTopic