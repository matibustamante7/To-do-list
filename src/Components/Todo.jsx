import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import './Todo.css'
export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className="Todo">
            {task ? (
                <>
                    <p className='Completed'
                        onClick={() => toggleComplete(task.id)}>{task?.task}</p>
                    <div className="Todo-icons">
                        <FontAwesomeIcon className="icon-edit" icon={faPenToSquare} onClick={() => editTodo(task?.id)} />
                        <FontAwesomeIcon className="icon-delete" icon={faTrash} onClick={() => deleteTodo(task?.id)} />
                    </div>
                </>
            ) : ''}
        </div>
    )
}