import React, { PropTypes } from 'react';
import Intent from '../intent/Counter-intent';

const About = ({ counter }) => {
  const handleIncrement = () => { Intent.incrementCounter(); };

  const handleDecrease = ()=> { Intent.decreaseCounter(); };

  return (
    <div className="jumbotron text-center">
      <h1>ABOUT</h1>
      <div className="center-block text-center">
        <h1>counter: {counter}</h1>
        <button className="btn btn-lg btn-primary" onClick={handleDecrease}>decrease</button>
           {'  '}
        <button className="btn btn-lg btn-primary" onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default About;
