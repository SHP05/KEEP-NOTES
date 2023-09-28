import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import './home.css'
const Home = () =>{
    const [todos,setTodos] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  

    useEffect(()=>{
        axios.get('https://task-manager-mern-app.vercel.app/get')
        .then(result => {
            setTodos(result.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    },[])

    const hendleEdit = async (id) =>{
        await axios.put('https://task-manager-mern-app.vercel.app/update/'+id)
        .then(result => {setTodos(result)})
        .catch(err => console.log(err))
    }

    return(
        <>
        <div>
            <h1>Todo List</h1>
            <Create />
            { 
             todos.length === 0 || loading ? (
                <div className="loader-container">
                  {/* <div className="spinner"></div> */}
                  <div className="custom-loader"></div>
                </div>
              ) : (
                todos.map((todo,key) => (
                <div key={key} className="mostly-customized-scrollbar">
                    <span>{todo.title}</span>
                    <h3>{todo.task}</h3>
                    <button onClick={() =>hendleEdit(todo._id)}>Edit</button>
                </div>
                )))
            }
        </div>
        </>
    )
}
export default Home;

{/* todos.length === 0 ? (<h1>No Todo</h1>)
                : todos.map((todo,key) => (
                <div key={key} className="mostly-customized-scrollbar">
                    <span>{todo.title}</span>
                    <h3>{todo.task}</h3>
                    <button onClick={() =>hendleEdit(todo._id)}>Edit</button>
                </div>
                )) */}