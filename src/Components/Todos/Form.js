import React from 'react'
import axios from 'axios'
import { MODE_HANDLER_CREATE } from '../../API/constants'
function Form({modeHandler, submitHandler, todo, todoHandler}) {

    const checkModeHandler = ()=>{
        return modeHandler === MODE_HANDLER_CREATE ? 'Add Todo' : 'Update Todo'
    }

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                <input type="text" className="form-control" id="todoValue" value={todo.todoValue} onChange={event => todoHandler(event)} name="todoValue" placeholder="Add todo here..." />
                </div>
                <button type="submit" className="btn btn-primary">{checkModeHandler()}</button>
            </form>
        </div>
    )
}

export default Form
