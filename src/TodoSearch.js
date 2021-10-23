import React from "react";
import './TodoSearch.css';



function TodoSearch ({ searchValue, SetSearchValue }) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        SetSearchValue(event.target.value);
    };
    return [<input
    placeholder="Cebolla"
    className='TodoSearch'
    value={searchValue}
    onChange={onSearchValueChange}
     />
    ];
}

export { TodoSearch };