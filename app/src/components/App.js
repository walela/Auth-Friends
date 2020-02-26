import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import Friends from './Friends'

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/friends'>
          <Friends />
        </PrivateRoute>
      </Switch>
    </div>
  )
}

function PrivateRoute({ children, ...rest }) {
  // pull token from local storage
  const tokenExists = localStorage.getItem('token')
  return <Route {...rest}>{tokenExists ? children : <Redirect to='/login' />}</Route>
}

export default App
