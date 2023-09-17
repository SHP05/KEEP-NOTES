import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Create = () =>{
  const [title,setTitle] = useState();
  const [task,setTask] = useState();

  const navigate = useNavigate();
  const submitHandeler = (e) =>{
      e.preventDefault();
      axios.post('https://task-manager-mern-app.vercel.app/create',{title,task})
      .then(result=>console.log(result))
      .catch(err=>console.log(err))
      navigate('/')
  }

  return(
      <>
          <div className="main">
          <div className="addTask">
            <form onSubmit={submitHandeler}>
              <h2>Create User</h2>
              <div>
                <label htmlFor="">Title</label>
                <input type="text" placeholder="Enter Title" className="form-control" onChange={(e)=>setTitle(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Enter Task" className="form-control" onChange={(e)=>setTask(e.target.value)}/>
              </div>
              <button className="btn btn-info mt-2 rounded-5">Submit</button>
            </form> 
          </div>
          </div>
      </>
  )
}

export default Create;

// import { useEffect, useState } from "react";
// import axios from "axios"

// const Create = () =>{
//     const [task,setTask] = useState();   
//     const [title,setTitle] = useState();   
//     const addHandler = (event) => {
//         event.preventDefault();
//         axios.post("http://localhost:3001/add",{title:title,task:task})
//         .then(result => console.log(result))
//         .catch((e)=> console.log(e))
// ;    } 
//      useEffect(()=>{
//      },[title])   
//     return(
//       <>
//         <div>
//           <input type="text" placeholder="Enter Title" onChange={(e)=> setTitle(e.target.value)}/>
//           <input type="text" placeholder="Enter Task" onChange={(e)=> setTask(e.target.value)}/>
//           <button onClick={addHandler}>Add</button>
//         </div>
//       </>
//     )
//   }
//   export default Create;
