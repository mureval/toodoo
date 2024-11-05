import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const InputTodo = ({ addTodo }) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleInputTodo = () => {
        if (!inputValue) return

        addTodo(inputValue)
        setInputValue('')
    }

    return (
        <div className='container-inputTodo'>
                <input autoFocus type="text" value={inputValue} onChange={handleChange} placeholder='Enter a new todo...' />
                <button onClick={handleInputTodo}><FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", fontSize: '18' }} /></button>
        </div>
    )
}

export default InputTodo