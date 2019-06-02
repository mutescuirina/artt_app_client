
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Events from './components/Event'
import News from './components/News' 
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>

      </ul>
      <Route exact path="/" component={App} />
      <Route path="/events" component={Events} />
      <Route path="/news" component={News} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


