const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require('./Models/Todo')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test');

app.post('/add', function(request, response){
    const task = request.body.task
    TodoModel.create({
        task: task
    })
    .then(result => response.json(result))
    .catch(err => response.json(err))
});

app.put('/update/:id', function(request, response) {
    const {id} = request.params;
    TodoModel.findByIdAndUpdate({_id : id}, {done: true})
    .then(result => response.json(result))
    .catch(err => response.json(err))
})

app.delete('/delete/:id', function(request, response){
    const {id} = request.params;
    TodoModel.findByIdAndDelete({_id : id})
    .then(result => response.json(result))
    .catch(err => response.json(err))
})

app.get('/get', function(request, response) {
    TodoModel.find()
    .then(result => response.json(result))
    .catch(err => response.json(err))
})

app.listen(3000, function() {
    console.log("server is running on the port 3000");
})
