const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connection = require('./db/taskdb');
const routes = require('./routes/index');
const cors = require('cors');
const app = express();
const model = require('./model/task');
const PORT = process.env.PORT || 3001;

app.use(cors(
  {
    origin: ["https://task-manager-mern-frontend-app-y9rc.vercel.app"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
  }
))
app.use(express.json());
app.use('/',routes);

// // post request from frontend
// app.post('/create',(req,res)=>{
//   model.create(req.body)
//   .then(task => res.json(task))
//   .catch((err)=>res.json(err))
// })

// app.get('/',(req,res)=>{
//   model.find({})
//   .then(result => res.json(result))
//   .catch((err)=>res.json(err))
// })

// //load data in update page
// app.get('/gettask/:id',(req,res)=>{
//   const id = req.params.id;
//   model.findById({_id:id})
//   .then(result=>res.json(result))
//   .catch((err)=>res.json(err))
// })

// //update data
// app.put('/update/:id',(req,res)=>{
//   const id = req.params.id;
//   console.log(id)
//   console.log(req.body.title);
//   model.findByIdAndUpdate({_id:id},{
//     title: req.body.Title,
//     task: req.body.Task
//   })
//   .then(result=>res.json(result))
//   .catch(er=>res.json(err))
// })

// // delete data
// app.delete('/deleteTask/:id',(req,res)=>{
//   const id = req.params.id;
//   model.findByIdAndDelete({_id: id})
//   .then(result => res.json(result))
//   .catch(err=> res.json(err))
// })

app.listen(PORT,()=>{console.log("app is running on http://localhost:3001")})
