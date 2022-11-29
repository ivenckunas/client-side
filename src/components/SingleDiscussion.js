import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setCurrentTopicId, setReplyArr } from "../store/generalStore";


function SingleDiscussion() {

  const { id } = useParams();
  const nav = useNavigate()
  const dispatch = useDispatch()
  const discussion = useSelector((state) => state.generalSlice.topics[id]);
  const currentDiscussionArr = discussion.topics
  dispatch(setReplyArr(currentDiscussionArr));

  const handleCreate = () => {
    nav(`/topic/create/${id}`)
  };


  useEffect(() => {
    const getData = () => {
      axios.get(`http://localhost:4000/all-topics`)
        .then(function (response) {
          dispatch(setCurrentTopicId(response.data.data[id]))
        }
        )
    }
    getData()
  }, [dispatch, id])

  return (
    <div className="container">
      <button onClick={handleCreate}>create new discussion</button>
      <div >
        <h1>{discussion.discussion}</h1>
        {currentDiscussionArr.length > 0 && currentDiscussionArr.map((discussion, id) => {
          return <div className="singleTopic" key={id}>
            <small>by: {discussion.author}</small>
            <h3>{discussion.title}</h3>
            <p>{discussion.message}</p>
            <button onClick={() =>
              nav(`/topic/reply/${id}`)
            }>reply</button>
          </div>;
        })}
      </div>

    </div>
  );
}

export default SingleDiscussion;
