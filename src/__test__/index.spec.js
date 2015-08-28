import test from 'tape';
import React from 'react/addons';
import Home from '../routes/Home.js';

const TestUtils = React.addons.TestUtils;

const createComponent = (component, props, ...children) => {
  const shallowRenderer = TestUtils.createRenderer();
  const reactElement = React.createElement(
    component,
    props,
    children.length > 1 ? children : children[0]
    );

  shallowRenderer.render(reactElement);
  return shallowRenderer.getRenderOutput();
};

test('Home component type', t => {
  
  t.equal(createComponent(Home).type, 'div');
  t.end();
});

test('Home title text', t => {
  
  const postTitle = createComponent(Home).props.children[0];
 
  t.equal(postTitle.props.children, 'Welcome to React + RxJS');
  t.end();
});