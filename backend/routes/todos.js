import express from 'express'
import  {getTodos, getSingleTodo, createTodo, updateTodo, deleteTodo, toggleTodo} from '../controllers/todos.js'
const router = express.Router()

router.get('/', getTodos)

router.get('/:id', getSingleTodo)

router.post('/', createTodo)

router.put('/:id', updateTodo)

router.put('/toggle/:id', toggleTodo)

router.delete('/:id', deleteTodo )

export default router