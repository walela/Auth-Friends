import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import Logout from './Logout'

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/logout'>
          <Logout />
        </Route>
      </Switch>
    </div>
  )
}

export default App
