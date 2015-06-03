import Rx from 'rx';
import update from 'react/lib/update';
import Intent from './../intent/Json-intent';
var dataSubject = new Rx.ReplaySubject(1);


var state = {
  data: {}
};

Intent.dataSubject.getJsonSubject.subscribe(function () {
  console.log('reaching here now');
  state = update(state, {
    $merge: {
      data: state.data + 'a'
    }
  });
  dataSubject.onNext(state);
});

Intent.dataSubject.postJsonSubject.subscribe(function () {
  state = update(state, {
    $merge: {
      data: state.data + 'b'
    }
  });
  dataSubject.onNext(state);
});

dataSubject.onNext(state);

module.exports = {
  dataSubject: dataSubject
};
