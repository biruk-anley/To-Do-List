const mongoose = require('mongoose')


// NB only schemas that are defined in the schema will be updated in database other files that are not defined in the scema will be ignored this will help to 
// defining schema will help to structured our work

const TaskSchema = new mongoose.Schema({
    name: String,
     completed:Boolean
    
})

module.exports = mongoose.model('Task', TaskSchema)