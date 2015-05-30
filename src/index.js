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