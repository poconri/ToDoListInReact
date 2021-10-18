import React from "react";
import './TodoSearch.css'

function TodoSearch () {
    const estado = React.useState();

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };
    return <input
    placeholder="Cebolla"
    className='TodoSearch'
    onChange={onSearchValueChange}
     />
}

export { TodoSearch };