import React, { useState } from 'react'


const AddCategory = ({ onNewCategory }) => {

    const [value, setInputValue] = useState('');

    const onInputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const onSubmit = (evt) => {

        evt.preventDefault();

        const newValue = value.trim();
        if (newValue === "") return;

        onNewCategory(newValue);
        setInputValue('');

    }

    return (
        <form onSubmit={onSubmit} >

            <input
                type="text"
                placeholder='Buscar Gifts'
                value={value}
                onChange={onInputChange}
            />
        </form>
    )
}

export {AddCategory};