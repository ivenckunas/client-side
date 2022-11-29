import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleTopic from "./SingleTopic";
import { setTopics } from '../store/generalStore'
import { useNavigate, useParams } from "react-router-dom";

function ForumMain() {

  const topics = useSelector(state => state.generalSlice.topics)

  const dispatch = useDispatch()

  useEffect(() => {
    const getData = () => {
      axios.get('http://localhost:4000/all-topics')
        .then(function (response) {
          console.log(response)
          dispatch(setTopics(response.data.data))
        }
        )
    }

    getData()
  }, [])

  return (
    <div>
      <h1>Topics</h1>
      {topics && topics.map((topic, i) => {
        return (
          <div
            key={i} >
            <SingleTopic topic={topic} index={i} />
          </div>
        );
      })}
    </div >
  );
}

export default ForumMain;
