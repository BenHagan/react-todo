var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it ('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it ('should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      // passing undefined evaluates to default parameter
      var res = reducers.showCompletedReducer(undefined, df(action));

      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('should toggle todo', () => {
      var todo = [{
        id: 'test',
        text: 'test text',
        completed: false,
        createdAt: 1488959127,
        completedAt: undefined
      },
      {
        id: 'test2',
        text: 'test text2',
        completed: false,
        createdAt: 1488959127,
        completedAt: 1488959127
      }
    ];
      var action = {
        type: 'TOGGLE_TODO',
        id: 'test'
      };
      var res = reducers.todosReducer(df(todo), df(action));

      expect(res.length).toEqual(2);
      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBeA('number');
      expect(res[1].completed).toBe(false);

      var res = reducers.todosReducer(df(todo), df(res[0]));
      expect(res[0].completedAt).toBe(undefined);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
