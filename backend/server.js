import express from 'express'
import router from './routes/todos.js'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const app = express()

mongoose.connect(process.env.DB_HOST, {
    dbName:'todos_db',
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`Connected to database`)
}).catch(error => console.error(`error when connectiong to mongo db ${error}`))


app.use(express.json())
app.use(cors())
app.use('/api/todo/', router)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})