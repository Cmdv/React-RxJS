import Rx from 'rx';
import Request from '../api/api-json';

var jsonSubjects = {
  goGetJSON: new Rx.Subject(),
  goPostJSON: new Rx.Subject()

};

export default {
  jsonSubjects,
  getJSON: () => Request.get('posts').subscribe(::jsonSubjects.goGetJSON.onNext),
  postJSON: () => Request.get('available').subscribe(::jsonSubjects.goPostJSON.onNext)
};
