import Rx from 'rx';
import update from 'react/lib/update';
import Intent from './../intent/Json-intent';


var subject = new Rx.ReplaySubject(1);


var state = {
  postResult: [],
  results: []
};


Intent.subjects.goGetJSON.subscribe((data) => {

  state = update(state, {
    $merge: {
      results: data
    }
  });
  subject.onNext(state);
});



Intent.subjects.goPostJSON.subscribe( (data) => {
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
