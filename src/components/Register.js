import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/generalStore';

function Register() {

  const emailRef = useRef()
  const pswRef = useRef()
  const pswRepeatRef = useRef()

  const nav = useNavigate()

  const dispatch = useDispatch()

  const register = () => {
    const userObj = {
      email: emailRef.current.value,
      password: pswRef.current.value,
      paswordRepeat: pswRepeatRef.current.value,
    };

    axios
      .post("http://localhost:4000/register", userObj)
      .then(function (response) {
        console.log("response ===", response.data);
        if (response.data.error === true) {
          return;
        } else {
          dispatch(login(true))
          setTimeout(() => {
            nav("/");
          }, 500);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <input ref={emailRef} type="text" placeholder="email" />
      <input ref={pswRef} type="password" placeholder="password" required />
      <input ref={pswRepeatRef} type="password" placeholder="repeat password" required />
      <button onClick={register}>Register</button>
    </div>
  )
}

export default Register