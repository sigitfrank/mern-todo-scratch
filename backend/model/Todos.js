import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TodosSchema = new Schema({
    todo:String,
    isDone:{
        type:Boolean,
        default:false
    }
}, {
    timestamps:true
})

const TODOS = mongoose.model('todos', TodosSchema)

export default TODOS