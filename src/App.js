import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './action';


class App extends Component {
  add = () => {
    let todo = document.getElementById('todo').value;
    this.props.addTodo(todo);
  };

  render() {
    return (
      <div>
        <input type="text" id="todo" />
        <button onClick={this.add}> Add </button>

        {this.props.todos.map((todo, i) => (
          <div key={i}> {todo} </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const enhance = connect(
  mapStateToProps,
  {
    addTodo
  }
);

export default enhance(App);