import React from 'react';
import Intent from '../intent/json-intent';

var JsonResults = React.createClass({

  handlePostJSON : (data) => {
    //function for sending JSON call just need to grab input.value and make a Math.random for the keys of each object

    console.log('getJSON' + data.event );
    //Intent.getJSON('bets', {bet_id: data.bet_id, odds: data.odds, stake: data.stake});
  },

  render() {
    var jsonData = this.props.results;

    var loopResults = () => {
      return jsonData.map((data) => {
          return (
            <ul>
              <li>
                <h3 key={data.id} >{data.title}</h3>
                <p key={data.title} >{data.body}</p>
              </li>
            </ul>
          );
      })
    };

    return (
      <div>
        <h1>Results: </h1>
        {loopResults()}
      </div>
    )
  }
});

module.exports = JsonResults;