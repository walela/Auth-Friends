import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../helpers/axiosWithAuth'

const submitFriendURL = 'http://localhost:5000/api/friends'

const AddFriend = () => {
  const history = useHistory()
  const initialFormData = {
    name: '',
    age: '',
    email: '',
  }
  const [newFriend, setNewFriend] = useState(initialFormData)

  const handleInputChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
  }

  const submitFriend = e => {
    e.preventDefault()
    axios()
      .post(submitFriendURL, newFriend)
      .then(res => {
        console.log(res)
        if (res.data) {
          history.push('/friends')
        }
      })
      .catch(err => console.error(err))
  }
  return (
    <div className='new-friend'>
      <fieldset>
        <legend>Add Friend</legend>
        <input
          name='name'
          placeholder='Name'
          value={newFriend.name}
          onChange={handleInputChange}
        />
        <input
          name='age'
          placeholder='Age'
          value={newFriend.age}
          onChange={handleInputChange}
        />
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={newFriend.email}
          onChange={handleInputChange}
        />
        <button className='submit-friend' onClick={submitFriend}>
          Add Friend
        </button>
      </fieldset>
    </div>
  )
}

export default AddFriend
