import Rx from 'rx';
import update from 'react/lib/update';
import Intent from './../intent/json-intent';


var subject = new Rx.ReplaySubject(1);


var state = {
  postResult: [],
  results: []
};




subject.onNext(state);

module.exports = {
  subject: subject
};
