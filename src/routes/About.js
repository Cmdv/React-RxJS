var React = require('react');
var Intent = require('../intent/Counter-intent');

var About = React.createClass({

  render() {
    console.log('props: ', this.props);
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
});

module.exports = About;