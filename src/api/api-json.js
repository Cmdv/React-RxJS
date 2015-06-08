'use strict';

import request from 'superagent';
import Rx from 'rx';

const API_URL = 'http://jsonplaceholder.typicode.com/';
const HEADERS = {
  Accept: 'application/json'
};


var buildRequest = (httpMethod, apiMethod, params) =>
    Rx.Observable.create(cb =>
        request[httpMethod](API_URL + apiMethod)
            .set(HEADERS)[httpMethod === 'get' ? 'query' : 'send'](params)
            .end((error, res) => cb.onNext(res.body)));



export default {
  get: apiMethod => buildRequest('get', apiMethod),
  post: (apiMethod, params) => buildRequest('post', apiMethod, params)
};