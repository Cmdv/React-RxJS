var React = require('react');
var Intent = require('../intent/Counter-intent');

var Login = React.createClass({

  render() {
    console.log('props: ', this.props);
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  }
});

module.exports = Login;