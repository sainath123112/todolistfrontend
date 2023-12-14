import './App.css'
import Home from "./components/Home/Home"
import Login from './components/Login/Login';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserHome from './components/UserHome/UserHome';
function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/:username" element={<UserHome></UserHome>}></Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App;