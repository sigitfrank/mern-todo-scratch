import React from 'react'
import axios from 'axios'
import { UPDATE_TODOS_URL, MODE_HANDLER_CREATE } from '../../API/constants'
const UpdateHandler = async (id, setTodo, setLoading, setError, todo, setModeHandler)=> {
    setLoading(true)
    try {
      await axios.put(`${UPDATE_TODOS_URL}/${id}`, { todo: todo })
      setLoading(false)
      setError(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
    setTodo({todoValue:''})
    setModeHandler(MODE_HANDLER_CREATE)
}

export default UpdateHandler
