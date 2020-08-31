import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../page/Home';

function Routertest() {
  return (
    <Router>

        <nav>

          <ul>
            <li className="list-inline-item">
              <Link to="/">OM RØRDAL RUN</Link>
            </li>
  
            <li className="list-inline-item">
              <Link to="/camps">TILMELDING</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/praktisk">DISTANCER</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/lineuptest">FORSIDE</Link>
            </li>
          </ul>
        </nav>

      <Route path="/" exact component={Home} />
    </Router>
  );
}
export default Routertest;