import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
          <Link to='/logout'>
            <button id='logout'>Sign Out</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
