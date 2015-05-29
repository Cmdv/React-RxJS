var React = require('react');
var Intent = require('../intent/Counter-intent');

var About = React.createClass({

  handleIncrement () {
    Intent.incrementCounter();
  },

  handleDecrease () {
    Intent.decreaseCounter();
  },

  render() {
    return (
      <div className="jumbotron text-center">
        <h1>ABOUT</h1>
        <div className="center-block text-center">
          <h1>counter: {this.props.counter}</h1>
          <button className="btn btn-lg btn-primary" onClick={this.handleDecrease}>decrease</button> {'  '}
          <button className="btn btn-lg btn-primary" onClick={this.handleIncrement}>increment</button>
        </div>
      </div>
    );
  }
});

module.exports = About;