import React from 'react'
import axios from 'axios'
import { DELETE_TODOS_URL } from '../../API/constants'
const DeleteTodo = async (id, setLoading, setError)=> {
    setLoading(true)
    try {
      await axios.delete(`${DELETE_TODOS_URL}/${id}`)
      setLoading(false)
      setError(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
}

export default DeleteTodo
