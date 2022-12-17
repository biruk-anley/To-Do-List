//Controllers are responsible for handling incoming requests and returning responses to the client.A controller's purpose is to receive specific requests for the application.

const Task = require('../model/Task')
const getAllTasks = (req, res) => {
    res.send('Geting Items')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}
const getTask = (req, res) => {
    res.json({id:req.params.id})
}
const updateTask = (req, res) => {
    res.send('Updating an Items')
}
const deleteTask = (req, res) => {
    res.send('Deleting an Items')
}
module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}