import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Header = () => {
  let history = useHistory()

  const logout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }
  return (
    <div className='header'>
      <nav>
        <Link to='/'>
          <h1>friendzone</h1>
        </Link>
        <Link to='/'>
          <img
            src='https://image.flaticon.com/icons/svg/1006/1006106.svg'
            alt='two friends hugging'
          />
        </Link>
        <div className='auth-buttons'>
          <Link to='/login'>
            <button>Sign In</button>
          </Link>

          <button id='logout' onClick={logout}>
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
