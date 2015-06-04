import Rx from 'rx';
import Request from '../api/api-json';

var jsonSubjects = {
  goGetJSON: new Rx.Subject(),
  goPostJSON: new Rx.Subject()

};

module.exports = {
  jsonSubjects: jsonSubjects,

  getJSON: () => {
    var buildRequest = Request.get('posts');
    var sub = buildRequest.subscribe( (body) => {
      return jsonSubjects.goGetJSON.onNext(body);
    });
  },

  postJSON: function () {
    var buildRequest = Request.get('available');
    var sub = buildRequest.subscribe( (body) => {
      return jsonSubjects.goPostJSON.onNext(body);
    });
  }
};
