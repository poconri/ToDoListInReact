import React from 'react';
import '../CSS/TodoCounter.css';
import { TodoContext } from './TodoContext';

function TodoCounter() {
 const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">You have completed {completedTodos} out of {totalTodos} ToDos</h2>
  );
}

export { TodoCounter };