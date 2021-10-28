import React from "react";
import { AppUI } from "../AppUI.js";
import { useLocalStorage } from '../hooks/useLocalStorage.js';

// const defaultTodos = [
//     { text: 'Cortar Cebolla', completed: false },
//     { text: 'Tomar el curso de intro a React', completed: false },
//     { text: 'Llorar con la llorona', completed: false },
//     { text: 'LALALALAA', completed: false },
//     { text: 'Comprar Waro', completed: false },
//   ];



function App() {

 const {
  item: todos,
  saveItem: saveTodos,
  loading,
  error,
 } = useLocalStorage('TODOS_V1', []);


const [searchValue, setSearchValue] = React.useState('');

const completedTodos = todos.filter(todo => !!todo.completed).length;
const totalTodos = todos.length;

let searchedTodos = [];

if(!searchValue.length >= 1) {
  searchedTodos = todos;
 } else {
  searchedTodos = todos.filter(todo => {
  const todoText = todo.text.toLowerCase();
  const searchText = searchValue.toLowerCase();
  return todoText.includes(searchText);
 });
}

const completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  if (!!newTodos[todoIndex].completed) {
  newTodos[todoIndex].completed = false;
  saveTodos(newTodos);
  } else {
  newTodos[todoIndex].completed = true;
  saveTodos(newTodos);
 }
};

const deleteTodo = (text) => {
 const todoIndex = todos.findIndex(todo => todo.text === text);
 const newTodos = [...todos];
 newTodos.splice(todoIndex, 1);
 saveTodos(newTodos);
};

return (
  <AppUI
  loading={loading}
  error={error}
  totalTodos={totalTodos}
  completedTodos={completedTodos}
  searchValue = {searchValue}
  setSearchValue={setSearchValue}
  searchedTodos={searchedTodos}
  completeTodo={completeTodo}
  deleteTodo={deleteTodo}
  />
 );
}

export default App;