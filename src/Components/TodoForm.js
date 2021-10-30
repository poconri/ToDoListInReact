import React from 'react';

function TodoForm() {

const [newTodoValue, setNewTodoValue] = useState('');

const {
    addTodo,
} = React.useContext(TodoContext);

const onChange = (event) => {
  setNewTodoValue (event.target.value);
};

 const onCancel = () => {
     //TODO
 };
 const onSubmit = (event) => {
    event.preventDefault();
    addTodo(input.value);
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
      onClick={ OnCancel}
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