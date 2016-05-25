import test from 'tape';
import React from 'react';
import createComponent from './createComponent_spec';
import Home from '../routes/Home.js';

test('Home component type', t => {
  t.equal(createComponent(Home).type, 'div');
  t.end();
});

test('Home component text', t => {
  const postTitle = createComponent(Home).props.children[0];
  t.equal(postTitle.props.children, 'Welcome to React + RxJS');
  t.end();
});
