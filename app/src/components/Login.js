import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const loginURL = 'http://localhost:5000/api/login'

const Login = () => {
  const history = useHistory()
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleInputChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const login = ({ username, password }) => {
    console.log(username, password)
    axios
      .post(loginURL, { username, password })
      .then(res => {
        window.localStorage.setItem('token', res.data.payload)
        history.push('/friends')
      })
      .catch(error => console.error(error))
      .finally(setCredentials({ username: '', password: '' }))
  }

  return (
    <div className='login-form'>
      <fieldset>
        <legend>Sign In</legend>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={credentials.username}
          onChange={handleInputChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleInputChange}
        />
        <button onClick={() => login(credentials)}>Submit</button>
      </fieldset>
    </div>
  )
}

export default Login
