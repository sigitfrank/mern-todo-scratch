import React from 'react'
import {MdDeleteForever, MdEdit} from 'react-icons/md'
import {MODE_HANDLER_EDIT} from '../../API/constants'
function ListTodos({todos, deleteTodo, editTodo, toggleTodoHandler}) {
    return (
        <>
          {todos.map(listTodo => {
                  return <div className="single-todo" key={listTodo._id}>
                    <div className="form-check">
                      <input checked={listTodo.isDone ? 'checked' : ''} value={listTodo._id} className="form-check-input" type="checkbox" name={`todo-${listTodo._id}`} onChange={event => toggleTodoHandler(event)} id={`todo-${listTodo._id}`} />
                      <label className="form-check-label" htmlFor={`todo-${listTodo._id}`} style={{textDecoration:`${listTodo.isDone ? 'line-through':''}`}}>
                        {listTodo.todo}</label>
                    </div>
                    <MdEdit className="edit-todo" data-id={listTodo._id} onClick={(event) => editTodo(event)}/>
                    <MdDeleteForever className="delete-todo" data-id={listTodo._id} onClick={(event) => deleteTodo(event)}/>
                  </div>
                })
                }   
        </>
    )
}

export default ListTodos
