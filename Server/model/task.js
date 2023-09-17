const mongoose = require('mongoose')

const tasSchema = mongoose.Schema({
    title: String,
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

const taskmodel = mongoose.model('task',tasSchema)
module.exports = taskmodel;