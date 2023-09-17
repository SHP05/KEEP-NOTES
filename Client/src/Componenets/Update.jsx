import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const UpdateUser = () =>{

    const [Title,setTitle] = useState();
    const [Task,setTask] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://task-manager-mern-app.vercel.app/gettask/'+id)
        .then(result=>{
            // console.log(result)
            setTitle(result.data.title)
            setTask(result.data.task)
        })
        .catch(err=>console.log(err))
    },[])

    const updateHandeler = (e) =>{
        e.preventDefault();
        console.log(Title,Task)
        axios.put('https://task-manager-mern-app.vercel.app/update/'+id, {Title,Task} )
        .then(result=>{
          console.log(result)
          navigate('/')     
        })
        .catch(err=>console.log(err))
    }

    return(
        <>
            <div className="main">
            <form className="updateTask">
              <h2>Update User</h2>
              <div>
                <label htmlFor="">Title</label>
                <input type="text" placeholder="Enter Title" className="form-control"  onChange={(e)=>setTitle(e.target.value)}  value={Title}/>
              </div>
              <div>
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Enter Task" className="form-control"  onChange={(e)=>setTask(e.target.value)}
                value={Task}/>
              </div>
              <button className="btn-update rounded-5 mt-4" onClick={updateHandeler}>Update</button>
            </form> 
          </div>
        </>
    )
}

export default UpdateUser;
