import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from "../history"

import PartOne from "./PartOne"

const App = () => {
  return(
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={PartOne} />
      </Switch>
    </Router>
  )
}
export default App
