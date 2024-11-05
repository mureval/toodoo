import React, { useState } from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'

const TodoWrapper = () => {

    const [todos, setTodos] = useState([
        { todo: 'first todo!', complete: true }
    ])

    const addTodo = (newTodo) => {
        const newTodoList = [...todos, { todo: newTodo, complete: false }]
        setTodos(newTodoList)
    }

    const handleCompletedTodo = (index) => {
        const newTodoList = [...todos]
        const completedTodo = todos[index]
        completedTodo['complete'] = true
        newTodoList[index] = completedTodo
        setTodos(newTodoList)
    }

    const handleDeleteTodo = (index) => {
        const newTodoList = todos.filter((_, i) => i !== index)
        setTodos(newTodoList)
    }

    return (
        <div className='todo-wrapper'>
            <InputTodo todos={todos} addTodo={addTodo} />
            <TodoList todos={todos} handleCompletedTodo={handleCompletedTodo} handleDeleteTodo={handleDeleteTodo}/>
        </div>
    )
}

export default TodoWrapper