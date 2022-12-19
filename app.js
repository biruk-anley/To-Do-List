const express = require('express')
const notfound = require('./middleware/notfound')
const errorhandler = require('./middleware/errorhandler')
const app = express()

// using model


const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use(errorhandler)


// routes

//app.get(api/v1/tasks)         - get all the tasks
//app.post(api/v1/tasks)        - create a new task
//app.get(api/v1/taks/:id)      - get a single task
//app.path(api/v1.tasks/:id)    - update a task
//app.delete(api/v1/tasks/:id)  -delete task

// create a function that accept a data from an api?






app.use('/api/v1/tasks', tasks)



const port = 3000

const start = async () => {
    try { 
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log( `server is listening on port ${port}...`))

    }
    catch (error) {
        console.log(error)
    }
}
start()