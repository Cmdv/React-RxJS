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

const RouterObs = Rx.Observable.create(observer => {
  Router.run(routes, location, (Handler, state) => {
    observer.onNext({Handler, state});
  });
});

const subscription = Rx.Observable.combineLatest(
  Model.subject,
  RouterObs,
  ((appState, { Handler, State }) => ({
    appState,
    Handler,
    State
  })))
    .subscribe(({ appState, Handler, State }) => {
      React.render(
        <Handler {...appState}/>,
        document.getElementById('app')
      );
    });