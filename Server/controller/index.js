const model = require('../model/task');

// post request from frontend
const Create = (req, res) => {
    model.create(req.body)
      .then(task => res.json(task))
      .catch((err) => res.json(err))
}

// app.post('/create', (req, res) => {
//     model.create(req.body)
//       .then(task => res.json(task))
//       .catch((err) => res.json(err))
//   })
  
const getData = (req,res) =>{
  model.find({})
  .then(result => res.json(result))
  .catch((err) => res.json(err))
}

  // app.get('/', (req, res) => {
  //   model.find({})
  //     .then(result => res.json(result))
  //     .catch((err) => res.json(err))
  // })
  
  //load data in update page
  const getDateForUpdate = (req,res) =>{
    const id = req.params.id;
    model.findById({ _id: id })
      .then(result => res.json(result))
      .catch((err) => res.json(err))
  }
  // app.get('/gettask/:id', (req, res) => {
  //   const id = req.params.id;
  //   model.findById({ _id: id })
  //     .then(result => res.json(result))
  //     .catch((err) => res.json(err))
  // })
  
  //update data
  const Update = (req,res) =>{
    const id = req.params.id;
    console.log(id)
    console.log(req.body.title);
    model.findByIdAndUpdate({ _id: id }, {
      title: req.body.Title,
      task: req.body.Task
    })
      .then(result => res.json({message:"Data Updated"}))
      .catch(er => res.json(err))
  }
  // app.put('/update/:id', (req, res) => {
  //   const id = req.params.id;
  //   console.log(id)
  //   console.log(req.body.title);
  //   model.findByIdAndUpdate({ _id: id }, {
  //     title: req.body.Title,
  //     task: req.body.Task
  //   })
  //     .then(result => res.json(result))
  //     .catch(er => res.json(err))
  // })
  
  // delete data
  const Delete = (req,res) =>{
    const id = req.params.id;
    model.findByIdAndDelete({ _id: id })
      .then(result => res.json(result))
      .catch(err => res.json(err))
  }
  // app.delete('/deleteTask/:id', (req, res) => {
  //   const id = req.params.id;
  //   model.findByIdAndDelete({ _id: id })
  //     .then(result => res.json(result))
  //     .catch(err => res.json(err))
  // })

  module.exports = { Create , getData , getDateForUpdate , Delete , Update };