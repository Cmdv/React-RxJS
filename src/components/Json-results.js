import React, { PropTypes } from 'react';

const JsonResults = ({ results }) => {

  const handlePostJSON = ({ event }) => {
    //function for sending JSON call just need to grab input.value and make a Math.random for the keys of each object
    console.log(`getJSON ${event}`);
    //Intent.getJSON('bets', {bet_id: data.bet_id, odds: data.odds, stake: data.stake});
  };

  const jsonData = results || [];

  const loopResults = () =>
    jsonData.map(({ id, title, body }) => (
      <li className="list-group-item" key={id + 2}>
        <h4 className="list-group-item-heading" key={id}>{title}</h4>
        <p className="list-group-item-text" key={title}>{body}</p>
      </li>
    ));

  return (
    <div>
      <ul className="list-group">
        {loopResults()}
      </ul>
    </div>
  );
};

export default JsonResults;
