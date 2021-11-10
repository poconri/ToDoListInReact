import React from 'react';
import '../CSS/TodoLoading.css';

const TodoLoading = () => {
 return (
  <div className="LoadingTodo-container">
   <span className="LoadingTodo-completeIcon"></span>
   <p className="LoadingTodo-text">Loading To DOs...</p>
   <span className="LoadingTodo-deleteIcon"></span>
  </div>
  );
}

export { TodoLoading };

