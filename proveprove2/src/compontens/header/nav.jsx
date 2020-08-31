import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../page/Home';

function Routertest() {
  return (
    <Router>
        <nav>
          <ul>
            <li className="list-inline-item">
              <Link to="/omrødalrun">OM RØRDAL RUN</Link>
            </li>
  
            <li className="list-inline-item">
              <Link to="/tilmelding">TILMELDING</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/distancer">DISTANCER</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">FORSIDE</Link>
            </li>
          </ul>
<div className="ikon">
          <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook "></i>
        </div>
        </nav>

      <Route path="/" exact component={Home} />
    </Router>
  );
}
export default Routertest;