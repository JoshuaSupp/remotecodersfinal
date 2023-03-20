import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import Axios from 'axios';

const Login = () => {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const navigate = useNavigate();

  const login = () => {
    Axios.post("http://localhost:3002/login", {
      username: username,
      password: password,
    }).then((response) => {

      if(response.data.message){
        setLoginStatus(response.data.message)
      }
      else{
        setLoginStatus(response.data[0].username)
        navigate('../Home', { replace: true })
        }
    })
  }
  return (
    <div class='login'>
      
        <div class="absolute3">
        <h2>Login</h2>
        <br/>
        <p>Username:<input type="text" onChange={(e) => {
       setUsername(e.target.value)
     }}/></p>
        <p>Password:<input type="password"  onChange={(e) => {
       setPassword(e.target.value)
     }}/></p>
        
        <button class="button"  onClick={() => { login();  }}>Login</button>
        </div>
        
        <p> {loginStatus}</p>
    </div>
  )
}

export default Login