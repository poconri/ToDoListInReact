import React from "react";
import { AppUI } from "../AppUI.js";
import { useLocalStorage } from '../Components/TodoContext/useLocalStorage.js';
import { TodoProvider } from "../Components/TodoContext/index.js";


function App() {

return (
  <TodoProvider>
    <AppUI />
  </TodoProvider>
 );
}

export default App;