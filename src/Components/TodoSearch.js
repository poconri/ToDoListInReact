import React from "react";
import '../CSS/TodoSearch.css';
import { TodoContext } from './TodoContext/index.js';



function TodoSearch () {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return [<input
    placeholder="Search Here..."
    className='TodoSearch'
    value={searchValue}
    onChange={onSearchValueChange}
     />
    ];
}

export { TodoSearch };