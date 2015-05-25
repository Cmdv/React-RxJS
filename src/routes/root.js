var React = require('react');

var Intent = require('../intent/Counter-intent');

var Root = React.createClass({

  handleIncrement () {
    Intent.incrementCounter();
  },

  handleDecrease () {
    Intent.decreaseCounter();
  },

  render() {
    console.log('props', this.props);
    return (
      <div>
        <h1>Hello</h1>
        <p>counter: {this.props.counter}</p>
        <button onClick={this.handleDecrease}>decrease</button>
        <button onClick={this.handleIncrement}>increment</button>
      </div>
    );
  }
});

module.exports = Root;

