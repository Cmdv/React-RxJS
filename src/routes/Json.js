import React from 'react';
import IntentJson from '../intent/Json-intent';

var Json = React.createClass({

  handleGetJson () {
    IntentJson.getJson();
  },

  handlePostJson () {
    IntentJson.postJson();
  },

  render() {
    return (
      <div className="jumbotron text-center">
        <h1>Lets get/post JSON</h1>

        <div className="center-block text-center">
          <h1>fetched data:</h1>
          <p>{this.props.dataSubject}</p>

          <button className="btn btn-lg btn-primary" onClick={this.handleGetJson}>Get JSON</button> {'  '}
          <button className="btn btn-lg btn-primary" onClick={this.handlePostJson}>increment</button>
        </div>
      </div>
    );
  }
});

module.exports = Json;

