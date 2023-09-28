import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../public/style.css"
import Create from "./Create";

const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://task-manager-mern-app.vercel.app/')
            .then(result => setUsers(result.data))
            .catch((err) => console.log(`No Task ${err}`))
    }, [])

    const handleDelete = async (id) => {
        console.log(id);
        await axios.delete('https://task-manager-mern-app.vercel.app/deleteTask/' + id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload(false);
    }

    return (
        <>
            <center><Link to="/create" className="btn btn-warning my-4 rounded-5">Add Task+</Link></center>
            <div className="main">
                <div className="taskcontainer">
                    <div className="cards add-card">
                        <button className="btn-add my-1 mx-1" onClick={()=> <Create/>}> 
                        <Link to="/create" >+<br/>ADD TASK</Link>
                        </button>
                    </div>
                {

                    users.length == 0
                        ?
                        <h2>No Task Available</h2>
                        :
                        users.map(
                            (task) => {
                                return <>
                                    <div className="cards">
                                        {
                                            task.title.length < 18
                                                ?
                                                <h3>{task.title}</h3>
                                                :
                                                <h3>{task.title.substring(0, 17)}...</h3>
                                        }
                                        <h5>{task.task}</h5>
                                        {/* <h3>{task.data}</h3> */}
                                        <span className="btn-span">
                                            <Link style={
                                                { textDecoration: "none", color: "white" }} className="btn-update mx-2" to={`/update/${task._id}`}>Update <i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button className="btn-delete" onClick={() => handleDelete(task._id)}>Delete <i className="fa-solid fa-trash"></i></button>
                                        </span>
                                    </div>
                                </>
                            }
                        )
                }
            </div>
        </div >
        </>
    )
}

export default User;

