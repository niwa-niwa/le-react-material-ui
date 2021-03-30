import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from "../history"

import AppBar from "./AppBar"

const App = () => {
  return(
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={AppBar} />
      </Switch>
    </Router>
  )
}
export default App
