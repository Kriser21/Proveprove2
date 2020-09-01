import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../page/Home';
import Tilmelding from '../page/Tilmelding';
import Distancer from '../page/Distancer';

function Routertest() {
  const [test, setTest] = useState(true);
  return (
    <Router>
        <nav>

        {test ? (
          <h1 className="showError">
            <button onClick={() => { console.log(setTest(false)); }}><i class="fas fa-bars"></i></button>
          </h1>
        ) : (

          <ul>
          <button onClick={() => { console.log(setTest(true)); }}><i class="fas fa-times"></i></button>
        
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
      )}

       
         
<div className="ikon">
          <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook "></i>
        </div>
        </nav>

      <Route path="/" exact component={Home} />
      <Route path="/tilmelding" exact component={Tilmelding} />
      <Route path="/distancer" exact component={Distancer} />
    </Router>
  );
}
export default Routertest;