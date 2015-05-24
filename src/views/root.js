var React = require('react');

var Intent = require('../intent');

class Root extends React.Component {

  constructor() {
    super();

    this.handleIncrement = function () {
      Intent.incrementCounter();
    }
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        <h1>Hello</h1>
        <p>counter: {this.props.counter}</p>
        <button onClick={this.handleIncrement}>increment</button>
      </div>
    );
  }
}

module.exports = Root;
