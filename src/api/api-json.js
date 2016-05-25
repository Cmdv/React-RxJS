import Rx from 'rxjs';
import request from 'superagent';

const API_URL = 'http://jsonplaceholder.typicode.com/';
const HEADERS = {
  Accept: 'application/json'
};

const buildRequest = (httpMethod, apiMethod, params) =>
  Rx.Observable.create(cb =>
    request[httpMethod](API_URL + apiMethod)
      .set(HEADERS)[httpMethod === 'get' ? 'query' : 'send'](params)
      .end((error, res) => cb.next(res.body)));

export default {
  get: apiMethod => buildRequest('get', apiMethod),
  post: (apiMethod, params) => buildRequest('post', apiMethod, params)
};
