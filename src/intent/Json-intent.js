import Rx from 'rx';

var dataSubject = {
  getJsonSubject: new Rx.Subject(),
  postJsonSubject: new Rx.Subject()

};

module.exports = {
  dataSubject: dataSubject,

  getJson: function () {
    dataSubject.getJsonSubject.onNext();
  },

  postJson: function () {
    dataSubject.postJsonSubject.onNext();
  }
};
