var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var foundation = require('foundation-sites');

var configureStore = require('configureStore');
var TodoList = require('TodoList');
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider>
        <TodoApp/>
      </Provider>
    );
  )};
});
