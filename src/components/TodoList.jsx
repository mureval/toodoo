import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({ todos, handleCompletedTodo, handleDeleteTodo }) => {

    return (
        <div className='container-todoList'>
            {todos.map((todo, todoIndex) => (
                <TodoCard
                    key={todoIndex}
                    todo={todo}
                    todoIndex={todoIndex}
                    handleCompletedTodo={handleCompletedTodo}
                    handleDeleteTodo={handleDeleteTodo}
                />
            ))}
        </div>
    )
}

export default TodoList