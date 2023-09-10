import mongoose from "mongoose";

const toDoSchema= new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    date: {
        type: Date,
        default: Date.now
    }

})

const toDo = mongoose.model("toDo", toDoSchema);
module.exports = toDo;