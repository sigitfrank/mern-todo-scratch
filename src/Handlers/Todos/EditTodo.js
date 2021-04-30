import React from 'react'
import axios from 'axios'
import { MODE_HANDLER_EDIT, FETCH_SINGLE_TODO_URL } from '../../API/constants'
const EditTodo = (event, setModeHandler, setIdTodo, setTodo)=> {
    setModeHandler(MODE_HANDLER_EDIT)
    const id = event.target.dataset.id
    setIdTodo(id)
    const getSingleTodo = () => {
      axios.get(`${FETCH_SINGLE_TODO_URL}/${id}`).then(response => {
        const { todo } = response.data.todo
        setTodo({ todoValue: todo })
      })
    }
    getSingleTodo()
}

export default EditTodo
