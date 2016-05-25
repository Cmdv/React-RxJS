import React from 'react';
import Intent from '../intent/json-intent';
import JsonResult from '../components/Json-results';

const JsonResults = (props) => {
  const handleGetJSON = () => { Intent.getJSON(); };

  return (
    <div className="text-center">
      <div className="page-header">
        <h2>Lets pull in some JSON</h2>
        <div className="center-block text-center">
          <button className="btn btn-lg btn-primary" onClick={handleGetJSON}>Click to view JSON</button>
        </div>
        <h1>Results: </h1>
        <JsonResult {...props} />
      </div>
    </div>
  );
};

export default JsonResults;
