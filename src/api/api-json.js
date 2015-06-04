'use strict';

import request from 'superagent';
import Rx from 'rx';

var API_URL = 'http://jsonplaceholder.typicode.com/';
var HEADERS = {
  Accept: 'application/json'
};


var buildRequest = (httpMethod, apiMethod, params) => {
  var url = API_URL + apiMethod;
  var paramsTransport = httpMethod === 'get' ? 'query' : 'send';

  var sendRequest = Rx.Observable.create((cb) => {
    return request[httpMethod](url)
      .set(HEADERS)
      [paramsTransport](params)
      .end(function(error, res) {
        cb.onNext(res.body);
      })
  });
  return sendRequest;
};



module.exports = {
  get: (apiMethod) => {
    return buildRequest('get', apiMethod);
  },

  post: (apiMethod, params) => {
    return buildRequest('post', apiMethod, params);
  }
};