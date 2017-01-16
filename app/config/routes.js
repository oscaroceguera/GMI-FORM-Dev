import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { MainContainer, InvitationContainer, FormContainer, RegistryListContainer } from 'containers'

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer}>
        <IndexRoute component={InvitationContainer} />
        <Route path='registration' component={FormContainer} />
        <Route path='list' component={RegistryListContainer} />
      </Route>
    </Router>
  )
}
