import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  handleTodoList: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  handleTodoList: null,
};

function TodoList(props) {
  const { todos, handleTodoList } = props;

  function handleClick(todo) {
    if (handleTodoList) {
      handleTodoList(todo);
    }
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
