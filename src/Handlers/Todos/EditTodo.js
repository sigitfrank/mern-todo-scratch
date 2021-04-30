import React from 'react'
import axios from 'axios'
import { MODE_HANDLER_EDIT, FETCH_SINGLE_TODO_URL } from '../../API/constants'
const EditTodo = (event, setModeHandler, setIdTodo, setTodo)=> {
    const id = event.target.dataset.id
    if(id){
      alert('Edit Mode On')
      setIdTodo(id)
      const getSingleTodo = () => {
        axios.get(`${FETCH_SINGLE_TODO_URL}/${id}`).then(response => {
          const { todo } = response.data.todo
          setTodo({ todoValue: todo })
        })
      }
      setModeHandler(MODE_HANDLER_EDIT)
      getSingleTodo()
    }
}

export default EditTodo
