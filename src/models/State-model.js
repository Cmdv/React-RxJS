import Rx from 'rxjs';
import update from 'react/lib/update';
import IntentCounter from '../intent/Counter-intent';
import IntentJSON from '../intent/json-intent';

const subject = new Rx.ReplaySubject(1);

let state = {
  postResult: [],
  results: [],
  counter: 0
};

IntentCounter.subjects.incrementCounterSubject.subscribe(()=> {
  state = update(state, {
    $merge: {
      counter: state.counter + 1
    }
  });
  subject.next(state);
});

IntentCounter.subjects.decreaseCounterSubject.subscribe(()=> {
  state = update(state, {
    $merge: {
      counter: state.counter - 1
    }
  });
  subject.next(state);
});

IntentJSON.jsonSubjects.goGetJSON.subscribe(data => {
  state = update(state, {
    $merge: {
      results: data
    }
  });
  subject.next(state);
});

IntentJSON.jsonSubjects.goPostJSON.subscribe(data => {
  state = update(state, {
    $merge: {
      postResult: data
    }
  });
  subject.next(state);
});

subject.next(state);

export default {
  subject
};
