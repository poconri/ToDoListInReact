import React from "react";
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { TodoForm } from './Components/TodoForm.js';
import { CreateTodoButton } from './Components/CreateTodoButton';
import {TodoContext} from './Components/TodoContext/index.js';
import { Modal } from './modal/index.js';

function AppUI () {
 const {
  error,
  loading,
  searchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal,
} = React.useContext(TodoContext);

return(
 <React.Fragment>
  <TodoCounter />
   <TodoSearch />
    <TodoList>
     {loading && <p>We are loading...</p>}
     {error && <p>Error: Ups something went wrong, try reloading the page.</p>}
     {!loading && !searchedTodos.length && <p>Create your first To do...</p>}
     {searchedTodos.map(todo => (
      <TodoItem
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text)}
      onDelete={() => deleteTodo(todo.text)}
      />
      ))}
    </TodoList>
    
    {!!openModal && (
      <Modal>
      <TodoForm />

    </Modal>
    )}

    <CreateTodoButton
        setOpenModal={setOpenModal}
      />
 </React.Fragment>
);
}

export {AppUI};