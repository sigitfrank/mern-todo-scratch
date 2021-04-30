import React, { useState, useEffect } from 'react'
import './custom.css'
import Form from './Components/Todos/Form'
import ListTodos from './Components/Todos/ListTodos'
import SubmitHandler from './Handlers/Todos/SubmitHandler'
import UpdateHandler from './Handlers/Todos/UpdateHandler'
import FetchTodos from './Handlers/Todos/FetchTodos'
import EditTodo from './Handlers/Todos/EditTodo'
import DeleteTodo from './Handlers/Todos/DeleteTodo'
import ToggleTodo from './Handlers/Todos/ToggleTodo'
import { MODE_HANDLER_CREATE, MODE_HANDLER_EDIT } from './API/constants'

const initialTodoState = {
  todoValue: '',
}

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState(initialTodoState)
  const [idTodo, setIdTodo] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [modeHandler, setModeHandler] = useState(MODE_HANDLER_CREATE)

  const toggleTodoHandler = (event) => {
    event.preventDefault()
    ToggleTodo(event.target.value, setLoading, setError)
  }

  const todoHandler = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value })
  }

  const deleteTodo = (event) => {
    DeleteTodo(event.target.dataset.id, setLoading, setError)
  }

  const editTodo = (event) => {
    console.log(event.target)
    alert(event.target.dataset.id)
    EditTodo(event, setModeHandler, setIdTodo, setTodo)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (modeHandler === MODE_HANDLER_CREATE) return SubmitHandler(setTodo, setLoading, setError, todo)
    if (modeHandler === MODE_HANDLER_EDIT) return UpdateHandler(idTodo, setTodo, setLoading, setError, todo, setModeHandler)
  }

  useEffect(() => {
    let mounted = true
    if(mounted){
      FetchTodos(setTodos, setLoading, setError)
    }
    return ()=>{
      mounted = false
    }
  }, [loading])

  if (loading) return <h1>Loading...</h1>


  if (error) return <h1>Error...</h1>


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-header">
              <h2> TODAY'S TODO</h2>
            </div>
            <div className="card-body">
              <div className="todo-container">
                <ListTodos todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} toggleTodoHandler={toggleTodoHandler} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-header">
              Add/Edit
            </div>
            <div className="card-body">
              <div className="form-container">
                <Form modeHandler={modeHandler} submitHandler={submitHandler} todo={todo} todoHandler={todoHandler} setModeHandler={setModeHandler} setTodo={setTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
