//Controllers are responsible for handling incoming requests and returning responses to the client.A controller's purpose is to receive specific requests for the application.

const Task = require('../model/Task')
const getAllTasks = async  (req, res) => {
    try {
        const tasks = await Task.find({  })
        console.log(tasks)
        res.status(201).json({tasks})
     }
    catch (error) {
        res.status(500).json({msg:error})
        
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
         res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOne({_id:taskId})
        if (!task) {
           return res.status(404).json({msg:`No task with an id : ${taskId}`})
       }
       
        res.status(201).json({ task })

    }
    catch (error) {
        res.status(500).json({msg:error})
         
    }
}
const updateTask = async (req, res) => {
    try {
        const { id: taskId } = req.params

        // new : true indicates that the updated one will come out
        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true, 
            runValidators:true
        })
        if (!task) {
           return res.status(404).json({msg:`No task with an id : ${taskId}`})
       }
        res.status(200).json({task})
     }
    catch (error) {
        res.status(500).json({msg:error})
        
    }
   
}
const deleteTask = async (req, res) => {

    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if (!task) {
           return res.status(404).json({msg:`No task with an id : ${taskId}`})
       }
       
        res.status(200).json({ task })
        // some other option for the above
        // res.status(200).send()
        // res.status(200).json({task:null,status:success})

    }
    catch (error) {
        res.status(500).json({msg:error})
         
    }
}
module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}