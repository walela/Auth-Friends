import React, { useEffect, useState } from 'react'
import axios from '../helpers/axiosWithAuth'
import Friend from './Friend'

const friendsURL = 'http://localhost:5000/api/friends'

const Friends = () => {
  const [friends, setFriends] = useState([])
  useEffect(() => {
    axios()
      .get(friendsURL)
      .then(res => setFriends(res.data))
      .catch(err => console.error(err))
  }, [])
  return (
    <React.Fragment>
      <h2>Austin's Friends</h2>
      <div className='friends-list'>
        {friends.map(friend => (
          <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default Friends
