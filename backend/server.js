const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require('./Models/Todo')

const app = express();

app.use(cors());
app.use(express.json);

mongoose.connect('mongodb://localhost:27017/test');

app.post('/add', function(request, response){
    const task = request.body.task
}) 

app.listen(3000, function() {
    console.log("server is running on the port 3000");
})
