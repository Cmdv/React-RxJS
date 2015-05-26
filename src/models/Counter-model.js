var Rx = require('rx');
var update = require('react/lib/update');
var Intent = require('./../intent/Counter-intent');
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
