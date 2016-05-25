import Rx from 'rxjs';
import Request from '../api/api-json';

var jsonSubjects = {
  goGetJSON: new Rx.Subject(),
  goPostJSON: new Rx.Subject()
};

export default {
  jsonSubjects,
  getJSON: () => Request.get('posts').subscribe(::jsonSubjects.goGetJSON.next),
  postJSON: () => Request.get('available').subscribe(::jsonSubjects.goPostJSON.next)
};
