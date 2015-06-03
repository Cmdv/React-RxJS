import React from 'react';
import Intent from '../intent/Counter-intent';

var Home = React.createClass({

  handleIncrement () {
    Intent.incrementCounter();
  },

  handleDecrease () {
    Intent.decreaseCounter();
  },

  render() {
    return (
    <div className="jumbotron text-center">
      <h1>Welcome to React + RxJS</h1>
      <p>This is a template showcasing RxJS as a dataflow + React + React-router. This project will continue to grown implementing other use full real life examples! (well as close as) </p>

      <div className="center-block text-center">
        <h1>counter: {this.props.counter}</h1>
        <button className="btn btn-lg btn-primary" onClick={this.handleDecrease}>decrease</button> {'  '}
        <button className="btn btn-lg btn-primary" onClick={this.handleIncrement}>increment</button>
      </div>
    </div>
    );
  }
});

module.exports = Home;

