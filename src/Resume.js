import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';
import {Route,NavLink,HashRouter} from 'react-router-dom';
import Home from './Home';
import About from './About'
import Skills from './Skills';
import Experience from './Experience';
import style from './style.css';

class Resume extends Component {
  render()
  {
    return (
      <HashRouter>
        <div style={style}>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Experience" component={Experience} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Resume;
