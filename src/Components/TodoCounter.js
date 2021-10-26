import React from 'react';
import '../CSS/TodoCounter.css';

function TodoCounter({total, completed}) {
  
  return (
    <h2 className="TodoCounter">You have completed {completed} out of {total} ToDos</h2>
  );
}

export { TodoCounter };