import { faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TodoCard = ({ todo, todoIndex, handleCompletedTodo, handleDeleteTodo }) => {
    return (
        <div className='card-todoList'>
            <p>{todo.todo}</p>
            {todo.complete ? <p>~<u>Completed</u>~</p> : <p>~<u>Open</u>~</p>}
            <div className="btn-todo">
                <button className='btn-completed' onClick={() => handleCompletedTodo(todoIndex)} disabled={todo.complete}><FontAwesomeIcon icon={faCircleCheck} /></button>
                <button className='btn-delete' onClick={() => handleDeleteTodo(todoIndex)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        </div >

    )
}

export default TodoCard