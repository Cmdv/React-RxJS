var Rx = require('rx');

var subjects = {
  incrementCounterSubject: new Rx.Subject(),
  decreaseCounterSubject: new Rx.Subject()

};

module.exports = {
  subjects: subjects,

  incrementCounter: function () {
    subjects.incrementCounterSubject.onNext();
  },

  decreaseCounter: function () {
    subjects.decreaseCounterSubject.onNext();
  }
};
