import Rx from 'rx';
import Request from '../api/api-json';

var subjects = {
  goGetJSON: new Rx.Subject(),
  goPostJSON: new Rx.Subject()

};

module.exports = {
  subjects: subjects,

  getJSON: () => {
    var buildRequest = Request.get('posts');
    var sub = buildRequest.subscribe( (body) => {
      return subjects.goGetJSON.onNext(body);
    });
  },

  postJSON: function () {
    var buildRequest = Request.get('available');
    var sub = buildRequest.subscribe( (body) => {
      return subjects.goPostJSON.onNext(body);
    });
  }
};
