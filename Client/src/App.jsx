import './App.css'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import User from './Componenets/User';
import Create from './Componenets/Create';
import Update from './Componenets/Update';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App