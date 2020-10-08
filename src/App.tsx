import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './assets/main.css'

import NavBar from './components/NavBar'
import Blog from './components/Blog'

const App: React.FunctionComponent = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-6">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/experience">
            experience
          </Route>
          <Route exact path="/skills">
            skills
          </Route>
          <Route exact path="/projects">
            projects
          </Route>
          <Route exact path="/education">
            education
          </Route>
          <Route exact path="/certifications">
            certifications
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route>landing</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
