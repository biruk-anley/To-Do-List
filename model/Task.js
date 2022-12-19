const mongoose = require('mongoose')


// NB only schemas that are defined in the schema will be updated in database other files that are not defined in the scema will be ignored this will help to 
// defining schema will help to structured our work

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength:[20, 'name can not be morethan 20 characters']
    },
    // completed is not completed by defalut
     
    completed: {
        type: Boolean,
        default:false,
     }
    
})

module.exports = mongoose.model('Task', TaskSchema)