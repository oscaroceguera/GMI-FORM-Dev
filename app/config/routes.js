import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { MainContainer, InvitationContainer, FormContainer, RegistryListContainer } from 'containers'

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer}>
        <IndexRoute component={InvitationContainer} />
        <Route path='registration' component={FormContainer} />
        <Route path='list/18e6223a-1df6-425d-9ca3-a175cd390494' component={RegistryListContainer} />
      </Route>
    </Router>
  )
}
