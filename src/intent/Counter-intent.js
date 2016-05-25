import Rx from 'rxjs';

const subjects = {
  incrementCounterSubject: new Rx.Subject(),
  decreaseCounterSubject: new Rx.Subject()
};

export default {
  subjects,
  incrementCounter: () => subjects.incrementCounterSubject.next(),
  decreaseCounter: () => subjects.decreaseCounterSubject.next()
};
