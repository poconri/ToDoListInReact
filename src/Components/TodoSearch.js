import React from "react";
import '../CSS/TodoSearch.css';



function TodoSearch ({ searchValue, setSearchValue }) {
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