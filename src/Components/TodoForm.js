import React from 'react';
import { TodoContext } from './TodoContext/index.js';
import '../CSS/TodoForm.css';

function TodoForm() {

const [newTodoValue, setNewTodoValue] = React.useState('');

const {
    addTodo,
    setOpenModal,

} = React.useContext(TodoContext);

const onChange = (event) => {
  setNewTodoValue(event.target.value);
};

 const OnCancel = () => {
     setOpenModal(false);
 };

 const onSubmit = (event) => {
    event.preventDefault(); //este metodo que viene por defecto a que cuando el formulario se envie, no se recargue la pagina.
    addTodo(newTodoValue);
    setOpenModal(false);
};

 return (
  <form
  onSubmit={onSubmit}
  >
  <label>...</label>
  <textarea
  value= {newTodoValue}
  onChange={onChange}
  placeholder="Add a new to do here..."
  />
  <div className="TodoForm-buttonContainer">
      <button
      type="button"
      onClick={ OnCancel }
      className="TodoForm-button TodoForm-button-cancel"
      >
          Cancel
      </button>
      <button
        type="submit"
        className="TodoForm-button TodoForm-button-add"
      >
          Add
      </button>
  </div>

  </form>


 );
}

export { TodoForm };