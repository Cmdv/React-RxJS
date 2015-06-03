import Rx from 'rx';
import update from 'react/lib/update';
import Intent from './../intent/Counter-intent';
var subject = new Rx.ReplaySubject(1);


var state = {
  counter: 0
};

Intent.subjects.incrementCounterSubject.subscribe(function () {
  state = update(state, {
    $merge: {
      counter: state.counter + 1
    }
  });
  subject.onNext(state);
});

Intent.subjects.decreaseCounterSubject.subscribe(function () {
  state = update(state, {
    $merge: {
      counter: state.counter - 1
    }
  });
  subject.onNext(state);
});

subject.onNext(state);

module.exports = {
  subject: subject
};
