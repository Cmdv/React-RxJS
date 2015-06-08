import Rx from 'rx';

var subjects = {
  incrementCounterSubject: new Rx.Subject(),
  decreaseCounterSubject: new Rx.Subject()

};

export default {
  subjects,
  incrementCounter: () => subjects.incrementCounterSubject.onNext(),
  decreaseCounter: () => subjects.decreaseCounterSubject.onNext()
};
