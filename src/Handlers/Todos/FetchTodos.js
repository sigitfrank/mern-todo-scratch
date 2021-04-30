import React from 'react'
import axios from 'axios'
import { FETCH_TODOS_URL } from '../../API/constants'
const FetchTodos = async (setTodos, setLoading, setError)=> {
    try {
        const { data } = await axios.get(FETCH_TODOS_URL)
        setLoading(false)
        setError(false)
        return setTodos(data.todos)
    } catch (error) {
        setLoading(false)
        setError(true)
    }
}

export default FetchTodos
