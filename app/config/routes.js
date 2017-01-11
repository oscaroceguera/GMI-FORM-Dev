import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { MainContainer, InvitationContainer, FormContainer } from 'containers'

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer}>
        <IndexRoute component={InvitationContainer} />
        <Route path='registration' component={FormContainer} />
      </Route>
    </Router>
  )
}
