const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const e = require('cors');
const app = express();
const model = require('./model/task');
const PORT = process.env.PORT || 3001;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://shyamjpankhaniya05:tPuWYrt3oorJ7e0o@usertasks.mziilxo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log("DB Connected Successfuly"))
.catch((e)=> console.log(e));

app.use(cors())
app.use(express.json())

// post request from frontend
app.post('/add',async(req,res)=>{
  const task = req.body.task
  const title = req.body.title

  await model.create({
    title:title, 
    task:task
  }).then(result => res.json(result))
  .catch(err => res.json(err))
})

// get data in frontend
app.get('/get',async(req,res)=>{
  await model.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

//update data
app.put('/update/:id',(req,res)=>{
  const {id} = req.params;
  // console.log(id);
})

app.listen(PORT,()=>{console.log("app is running on http://localhost:3001")})
