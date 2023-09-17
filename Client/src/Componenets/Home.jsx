import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
const Home = () =>{
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        axios.get('https://task-manager-mern-app.vercel.app/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])

    const hendleEdit = async (id) =>{
        await axios.put('https://task-manager-mern-app.vercel.app/update/'+id)
        .then(result => setTodos(result))
        .catch(err => console.log(err))
    }

    return(
        <>
        <div>
            <h1>Todo List</h1>
            <Create />

            { 
                todos.length === 0 ? (<h1>No Todo</h1>)
                : todos.map((todo,key) => (
                <div key={key}>
                    <span>{todo.title}</span>
                    <h3>{todo.task}</h3>
                    <button onClick={() =>hendleEdit(todo._id)}>Edit</button>
                </div>
                ))
            }
        </div>
        </>
    )
}
export default Home;
