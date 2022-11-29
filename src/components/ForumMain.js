import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleTopic from "./SingleTopic";
import { setLeaderboard, setTopics } from '../store/generalStore'

function ForumMain() {

  const topics = useSelector(state => state.generalSlice.topics)

  const dispatch = useDispatch()
  useEffect(() => {
    const getTopicsData = () => {
      axios.get('http://localhost:4000/all-topics')
        .then(function (response) {
          dispatch(setTopics(response.data.data))
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    const getMessagesCount = () => {
      axios.get('http://localhost:4000/users')
        .then(function (response) {
          dispatch(setLeaderboard(response.data.data))
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    const interval = setInterval(() => {
      getTopicsData()
      getMessagesCount()
    }, 1000);

    return () => clearInterval(interval)
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
