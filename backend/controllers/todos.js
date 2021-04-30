
import data from '../Data.js'
import TODOS from '../model/Todos.js'

const getTodos = (req, res)=>{
    const getTodos = async ()=>{
        try {
            const todos = await TODOS.find({})
            return res.status(200).json({success:true, todos:todos})
        } catch (error) {
            return res.status(400).json({success:false, msg:`Something wrong : ${error}`})
        }
    }
    getTodos()
}

const getSingleTodo = (req, res)=>{
    const {id} = req.params
    const getTodo = async ()=>{
        try {
            const todo = await TODOS.findById(id)
            if(!todo)
                return res.status(404).json({success:false, msg:'Todo doesnt exist'})
            return res.status(200).json({success:true, todo:todo})
            
        } catch (error) {
            console.log(error)
        }
    }
    getTodo()
}

const createTodo = (req, res)=>{
    const {todoValue} = req.body.todo
    if(!todoValue){
        return res.status(400).json({success:false, msg:'Please provide todo'})
    }
    const newTodos = new TODOS({
        todo:todoValue,
        isDone:false
    })

    return newTodos.save()
    .then(todo=>{
        res.status(201).json({success:true, msg:'Todo created', todo:todo})
    }).catch(error=>{
        res.status(400).json({success:false, msg:`Todo failed to created: ${error}`})
    })

}

const updateTodo = (req, res)=>{
    const {id} = req.params
    const {todoValue} = req.body.todo
    TODOS.findByIdAndUpdate(id, {todo:todoValue}, (err, docs)=>{
        if(err) 
            return res.status(400).json({success:false, msg:'Error update todo'})
        return res.status(201).json({success:true, msg:docs})
    })

}

const deleteTodo =(req, res)=>{
    const {id} = req.params
    TODOS.findOneAndRemove({_id:id}, function (err, docs) {
        if(err)
            return res.status(400).json({success:false, msg:'Failed delete todo'})
        return res.status(201).json({success:true, msg:'Todo Deleted', docs})
      });
}

const toggleTodo = (req,res)=>{
    const {id} = req.params
    const findTodoAndUpdate = async ()=>{
        try {
            const todo = await TODOS.findById(id).exec()
            if(!todo){
                return res.status(200).json({success:true, msg:'Todo doesnt exist'})
            }
            const isDone = !todo.isDone
            TODOS.findByIdAndUpdate(id, {isDone:isDone}, (err, docs)=>{
                if(err)
                    return res.status(400).json({success:false, msg:'Error toggling todo'})
                return res.status(201).json({success:true, msg:docs})
            })
        } catch (error) {
            
        }
    }

    findTodoAndUpdate()
    
}
export {getTodos, getSingleTodo, createTodo, updateTodo, deleteTodo, toggleTodo}