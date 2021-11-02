import React from "react";
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { TodoForm } from './Components/TodoForm.js';
import { CreateTodoButton } from './Components/CreateTodoButton';
import {TodoContext} from './Components/TodoContext/index.js';
import { Modal } from './modal/index.js';
import { TodoError } from './Components/TodoError.js';
import { TodoLoading } from './Components/TodoLoading.js';
import { EmptyTodo } from './Components/EmptyTodo.js';

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
     {error && <TodoError error={error} />}
     {loading && <TodoLoading />}
     {!loading && !searchedTodos.length && <EmptyTodo />}
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