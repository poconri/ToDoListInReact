import React from 'react';
import '../CSS/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };
  return (
    <button 
    className="CreateTodoButton"
    onClick= {() =>onClickButton('ya jalo')}
    >
    +
    </button>
  );
}

export { CreateTodoButton };