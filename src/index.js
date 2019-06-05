
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import App from './App'
import AllEvents from './components/AllEvents'
import AllNews from './components/AllNews' 
import AllTreasures from './components/AllTreasure'
import AllTBT from './components/AllTBT'
import { Navbar } from 'react-materialize';
const routing = (
  <Router>
    <div>
    <Navbar className="navigation" brand={<a />}>
      <ul>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link  to="/"><img className="logo"  src="assets/artt_logo.png"></img></Link>
        </li>
        <li>
          <Link to="/treasures">Treasures</Link>
        </li>
        <li>
          <Link to="/tbt">TBT</Link>
        </li>
      </ul>
      </Navbar>
      <Route path="/events" component={AllEvents} />
      <Route path="/news" component={AllNews} />
      <Route exact path="/" component={App} />
      <Route path="/treasures" component={AllTreasures} />
      <Route path="/TBT" component={AllTBT} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


