import React from 'react'
import axios from 'axios'
import { TOGGLE_TODOS_URL } from '../../API/constants'

const ToggleTodo= (id, setLoading, setError)=> {
    setLoading(true)
    const _id = id
    const toggleTodo = async () => {
      try {
        await axios.put(`${TOGGLE_TODOS_URL}/${_id}`)
        setLoading(false)
        setError(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }

    }

    toggleTodo()
}

export default ToggleTodo
