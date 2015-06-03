import React from 'react';
import Rx from 'rx';
import Model from './models/Counter-model';
import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Json from './routes/Json';
import Router from 'react-router';

var DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div className="container theme-showcase">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="app">React RxJS</Link>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><Link to="app">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="json">Json</Link></li>
                <li><Link to="login">Login</Link></li>
              </ul>
              <button className="btn btn-default navbar-btn">counter: {this.props.counter}</button> {'  '}
              <a href="https://github.com/Cmdv/React-RxJS/archive/master.zip" className="btn btn-default navbar-btn"><span className="glyphicon glyphicon-download-alt"></span>  Download zip</a> {'  '}
              <a href="https://github.com/Cmdv/React-RxJS" className="btn btn-default navbar-btn">GitHub</a>
            </div>
          </div>
        </nav>
        <RouteHandler {...this.props} />
      </div>

    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="json" handler={Json}/>
    <Route name="login" handler={Login}/>
    <DefaultRoute handler={Home}/>
  </Route>
);



Router.run(routes, function (Handler) {
  Model.subject.subscribe((appState) => {
    React.render(
      <Handler {...appState}/>,
      document.getElementById('app')
    );
  });
});