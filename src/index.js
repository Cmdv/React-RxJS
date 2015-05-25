var React = require('react');
var Rx = require('rx');

var Model = require('./models/Counter-model');
var Home = require('./routes/Home');
var About = require('./routes/About');
var Login = require('./routes/Login');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="login">Login</Link></li>
          </ul>
        </header>
        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="login" handler={Login}/>
    <DefaultRoute handler={Home}/>
  </Route>
);



Router.run(routes, function (Handler) {
  Model.subject.subscribe((appData) => {
    React.render(
      <Handler {...appState}/>,
      document.getElementById('app')
    );
  });
});
