import React from "react";
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';

function AppUI ({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
    return(
        <React.Fragment>
      <TodoCounter
      total={totalTodos}
      completed={completedTodos}
       />
      <TodoSearch
      searchValue = {searchValue}
      setSearchValue={setSearchValue}
       />

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

      <CreateTodoButton />
    </React.Fragment>
    );
}

export {AppUI};