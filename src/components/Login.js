import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/generalStore'

function Login() {

  const loginEmailRef = useRef()
  const loginPswRef = useRef()

  const dispatch = useDispatch()

  const handleUserlogin = () => {
    const userObj = {
      email: loginEmailRef.current.value,
      password: loginPswRef.current.value,
    };

    axios
      .post("http://localhost:4000/login", userObj)
      .then(function (response) {
        if (response.data.error === true) {
          console.log(response)
        } else {
          dispatch(login(true))
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input ref={loginEmailRef} type="email" placeholder="user email" required />
      <input ref={loginPswRef} type="password" placeholder="password" required />
      <button onClick={handleUserlogin}>Login</button>
    </div>
  )
}

export default Login