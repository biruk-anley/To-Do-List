const express = require('express')

const app = express()

const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

// routes

//app.get(api/v1/tasks)         - get all the tasks
//app.post(api/v1/tasks)        - create a new task
//app.get(api/v1/taks/:id)      - get a single task
//app.path(api/v1.tasks/:id)    - update a task
//app.delete(api/v1/tasks/:id)  -delete task

app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})


app.use('/api/v1/tasks', tasks)






const port = 3000
app.listen(port, console.log(`server is listening on port ${port}`))