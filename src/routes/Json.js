import React from 'react';
import Intent from '../intent/json-intent';
import Results from '../components/Json-results';

var JsonResults= React.createClass({

  handleGetJSON () {
    Intent.getJSON();
  },

  render() {

    return (


      <div className="text-center">
        <div className="page-header">
          <h2>Lets pull in some JSON</h2>
          <div className="center-block text-center">
            <button className="btn btn-lg btn-primary" onClick={this.handleGetJSON}>Click to view bets</button>
          </div>
          <Results {...this.props} />
        </div>
      </div>
    );
  }
});

module.exports = JsonResults;


