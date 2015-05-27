var React = require('react'),
  Rx = require('rx'),
  Model = require('./models/Counter-model'),
  Home = require('./routes/Home'),
  About = require('./routes/About'),
  Login = require('./routes/Login'),
  Router = require('react-router'),

  DefaultRoute = Router.DefaultRoute,
  Link = Router.Link,
  Route = Router.Route,
  RouteHandler = Router.RouteHandler;

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
        <RouteHandler {...this.props} />
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
  Model.subject.subscribe((appState) => {
    React.render(
      <Handler {...appState}/>,
      document.getElementById('app')
    );
  });
});