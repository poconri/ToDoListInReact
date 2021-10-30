import React from 'react';
import { TodoContext } from './TodoContext/index.js';

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
  placeholder="Cortar la Cebolla para el almuerzo"
  />
  <div>
      <button
      type="button"
      onClick={ OnCancel }
      >
          Cancel
      </button>
      <button
        type="submit"

      >
          Add
      </button>
  </div>

  </form>


 );
}

export { TodoForm };