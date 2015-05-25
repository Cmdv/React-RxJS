var React = require('react');
var Rx = require('rx');

var Model = require('./models/Counter-model');
var Root = require('./routes/root');

Model.subject.subscribe((appState) => {
  React.render(
    <Root {...appState}/>,
    document.getElementById('app')
  );
});