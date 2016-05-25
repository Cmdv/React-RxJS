import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const NavBar = ({ counter }) => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <IndexLink className="navbar-brand" to="/">React RxJS</IndexLink>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><Link to="/about" onlyActiveOnIndex={false}>About</Link></li>
          <li><Link to="/json" onlyActiveOnIndex={false}>Json</Link></li>
          <li><Link to="/login" onlyActiveOnIndex={false}>Login</Link></li>
        </ul>
        <button className="btn btn-default navbar-btn">counter: {counter}</button>
           {'  '}
        <a href="https://github.com/Cmdv/React-RxJS/archive/master.zip" className="btn btn-default navbar-btn">
          <span className="glyphicon glyphicon-download-alt" /> Download zip
        </a>
           {'  '}
        <a href="https://github.com/Cmdv/React-RxJS" className="btn btn-default navbar-btn">GitHub</a>
      </div>
    </div>
  </nav>
);

export default NavBar;
