import React from 'react'

const Friend = ({ name, age, email }) => {
  return (
    <div className='friend'>
      <div className='name'>
        <h3>{name}</h3>
      </div>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  )
}

export default Friend
