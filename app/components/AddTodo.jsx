var React = require('react');
var PropTypes = React.PropTypes;
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = "";
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="What do you need to do?" ref="todoText"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }

});

export default connect()(AddTodo);
