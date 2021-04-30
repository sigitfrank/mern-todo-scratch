import React from 'react'
import axios from 'axios'
import { MODE_HANDLER_CREATE } from '../../API/constants'
function Form({ modeHandler, submitHandler, todo, todoHandler, setModeHandler, setTodo }) {

    const checkModeHandler = () => {
        return modeHandler === MODE_HANDLER_CREATE ? 'Add Todo' : 'Update Todo'
    }

    const resetForm = () => {
        setTodo({ todoValue: '', })
        return setModeHandler(MODE_HANDLER_CREATE)
    }

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input type="text" className="form-control" id="todoValue" value={todo.todoValue} onChange={event => todoHandler(event)} name="todoValue" placeholder="Add todo here..." />
                </div>
                <button type="submit" className="btn btn-primary me-2">{checkModeHandler()}</button>
                <button type="button" onClick={() => resetForm()} className="btn btn-danger">Reset</button>
            </form>
        </div>
    )
}

export default Form
