import React from 'react'
import axios from 'axios'
import { CREATE_TODOS_URL } from '../../API/constants'

const SubmitHandler = async (setTodo, setLoading, setError, todo)=> {    
    setLoading(true)
    try {
      await axios.post(CREATE_TODOS_URL, { todo: todo })
      setLoading(false)
      setError(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
    setTodo({todoValue:''})
}

export default SubmitHandler
