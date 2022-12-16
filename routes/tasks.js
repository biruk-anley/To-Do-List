const express = require('express');

//The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 
const router = express.Router();

const{getAllTasks,createTask,deleteTask,getTask, updateTask} = require('../controllers/tasks')
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
 
module.exports = router;

