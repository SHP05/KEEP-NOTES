const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const e = require('cors');
const app = express();
const model = require('./model/task');
const PORT = process.env.PORT || 3001;

app.use(cors(
  {
    origin: ["https://task-manager-mern-app.vercel.app/"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
  }
))
app.use(express.json())
// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://shyamjpankhaniya05:tPuWYrt3oorJ7e0o@usertasks.mziilxo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log("DB Connected Successfuly"))
.catch((e)=> console.log(e));

// post request from frontend
app.post('/create',(req,res)=>{
  model.create(req.body)
  .then(task => res.json(task))
  .catch((err)=>res.json(err))
})

app.get('/',(req,res)=>{
  model.find({})
  .then(result => res.json(result))
  .catch((err)=>res.json(err))
})

//load data in update page
app.get('/gettask/:id',(req,res)=>{
  const id = req.params.id;
  model.findById({_id:id})
  .then(result=>res.json(result))
  .catch((err)=>res.json(err))
})

//update data
app.put('/update/:id',(req,res)=>{
  const id = req.params.id;
  console.log(id)
  console.log(req.body.title);
  model.findByIdAndUpdate({_id:id},{
    title: req.body.Title,
    task: req.body.Task
  })
  .then(result=>res.json(result))
  .catch(er=>res.json(err))
})

// delete data
app.delete('/deleteTask/:id',(req,res)=>{
  const id = req.params.id;
  model.findByIdAndDelete({_id: id})
  .then(result => res.json(result))
  .catch(err=> res.json(err))
})

app.listen(PORT,()=>{console.log("app is running on http://localhost:3001")})
