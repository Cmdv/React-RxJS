import Rx from 'rx';
import update from 'react/lib/update';
import IntentCounter from '../intent/Counter-intent';
import IntentJSON from '../intent/json-intent';
var subject = new Rx.ReplaySubject(1);


var state = {
  postResult: [],
  results: [],
  counter: 0
};

IntentCounter.subjects.incrementCounterSubject.subscribe(function () {
  state = update(state, {
    $merge: {
      counter: state.counter + 1
    }
  });
  subject.onNext(state);
});

IntentCounter.subjects.decreaseCounterSubject.subscribe(function () {
  state = update(state, {
    $merge: {
      counter: state.counter - 1
    }
  });
  subject.onNext(state);
});


IntentJSON.jsonSubjects.goGetJSON.subscribe((data) => {
  state = update(state, {
    $merge: {
      results: data
    }
  });
  subject.onNext(state);
});

IntentJSON.jsonSubjects.goPostJSON.subscribe((data) => {
  state = update(state, {
    $merge: {
      postResult: data
    }
  });
  subject.onNext(state);
});

subject.onNext(state);

module.exports = {
  subject: subject
};