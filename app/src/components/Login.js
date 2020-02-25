import React from 'react'

const Login = () => {
  return (
    <div className='login-form'>
      <fieldset>
        <legend>Login</legend>
        <input type='text' name='username' placeholder='Username' />
        <input type='password' name='password' placeholder='Password' />
        <button>Submit</button>
      </fieldset>
    </div>
  )
}

export default Login
