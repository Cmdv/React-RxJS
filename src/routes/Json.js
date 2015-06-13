import React from 'react';
import Rx from 'rx';
import Intent from '../intent/json-intent';
import JsonResult from '../components/Json-results';

var JsonResults = React.createClass({

  loading () {

  },

  handleGetJSON () {
    Intent.getJSON();
  },

  render() {
    return (
        <div className="text-center">
          <div className="page-header">
            <h2>Lets pull in some JSON</h2>
            <div className="center-block text-center">
              <button className="btn btn-lg btn-primary" onClick={this.handleGetJSON}>Click to view JSON</button>
            </div>
            <h1>Results: </h1>
            <JsonResult {...this.props} />
          </div>
        </div>
    );
  }
});

module.exports = JsonResults;